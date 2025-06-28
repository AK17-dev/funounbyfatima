
import { useState } from 'react';
import { X, Edit, Upload, DollarSign, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface AdminPanelProps {
  products: Product[];
  onUpdateProducts: (products: Product[]) => void;
  onClose: () => void;
}

const AdminPanel = ({ products, onUpdateProducts, onClose }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState<'products' | 'social' | 'logo'>('products');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [socialMedia, setSocialMedia] = useState({
    instagram: 'https://www.instagram.com/funoun_by_fatima?igsh=MXFvbWZ1eGh2djg4NA==',
    facebook: 'https://www.facebook.com/share/18pStMaAAX/',
    email: 'fatimahomsy.designer@gmail.com'
  });

  const handleProductUpdate = (updatedProduct: Product) => {
    const updatedProducts = products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    );
    onUpdateProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name: "New Product",
      price: 0,
      image: "",
      description: "Product description"
    };
    onUpdateProducts([...products, newProduct]);
    setEditingProduct(newProduct);
  };

  const handleDeleteProduct = (productId: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter(p => p.id !== productId);
      onUpdateProducts(updatedProducts);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'products' 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Products & Prices
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'social' 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Social Media
          </button>
          <button
            onClick={() => setActiveTab('logo')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'logo' 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Logo & Branding
          </button>
        </div>
        
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Products</h3>
                <Button onClick={handleAddProduct} className="bg-orange-500 hover:bg-orange-600">
                  Add New Product
                </Button>
              </div>
              
              {editingProduct && (
                <Card className="border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle>Edit Product</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Product Name</Label>
                      <Input
                        id="name"
                        value={editingProduct.name}
                        onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({...editingProduct, price: Number(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        value={editingProduct.description}
                        onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Image URL</Label>
                      <Input
                        id="image"
                        value={editingProduct.image}
                        onChange={(e) => setEditingProduct({...editingProduct, image: e.target.value})}
                        placeholder="Paste image URL or upload new image"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => handleProductUpdate(editingProduct)} className="bg-green-500 hover:bg-green-600">
                        Save Changes
                      </Button>
                      <Button onClick={() => setEditingProduct(null)} variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="grid gap-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => setEditingProduct(product)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDeleteProduct(product.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'social' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Social Media Settings</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <Input
                    id="instagram"
                    value={socialMedia.instagram}
                    onChange={(e) => setSocialMedia({...socialMedia, instagram: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="facebook">Facebook URL</Label>
                  <Input
                    id="facebook"
                    value={socialMedia.facebook}
                    onChange={(e) => setSocialMedia({...socialMedia, facebook: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Contact Email</Label>
                  <Input
                    id="email"
                    value={socialMedia.email}
                    onChange={(e) => setSocialMedia({...socialMedia, email: e.target.value})}
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Save Social Media Settings
                </Button>
              </div>
            </div>
          )}
          
          {activeTab === 'logo' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Logo & Branding</h3>
              <div className="space-y-4">
                <div>
                  <Label>Current Logo</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <span className="text-gray-600">FunounByFatima</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="logo-upload">Upload New Logo</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 2MB</p>
                  </div>
                </div>
                <div>
                  <Label htmlFor="brand-name">Brand Name</Label>
                  <Input
                    id="brand-name"
                    defaultValue="FunounByFatima"
                    placeholder="Enter brand name"
                  />
                </div>
                <div>
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    defaultValue="Handcrafted with Love • Since 2019"
                    placeholder="Enter tagline"
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Save Branding Changes
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

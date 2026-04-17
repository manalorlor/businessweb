import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { CreditCard, CheckCircle2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Payment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    amount: '',
    purpose: 'IT Support', // Default purpose
  });
  
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Best Practice: Load the key from your .env file
  // E.g., VITE_PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "pk_test_your_paystack_public_key_here";

  // Paystack expects amount in Pesewas/Kobo (smallest currency unit). 
  // We multiply the GHS amount by 100.
  const amountInPesewas = (parseFloat(formData.amount) || 0) * 100;

  const componentProps = {
    email: formData.email,
    amount: amountInPesewas,
    currency: 'GHS',
    metadata: {
      name: `${formData.firstName} ${formData.lastName}`,
      custom_fields: [
        {
          display_name: 'Payment Purpose',
          variable_name: 'payment_purpose',
          value: formData.purpose,
        }
      ]
    },
    publicKey,
    text: `Pay GHS ${formData.amount || '0'}`,
    onSuccess: (reference) => {
      console.log('Payment Successful!', reference);
      setIsSuccess(true);
      // In a real app with a backend, you would verify this reference on your server.
    },
    onClose: () => {
      alert("Payment window closed.");
    },
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const isFormValid = 
    formData.firstName && 
    formData.lastName && 
    formData.email && 
    formData.amount && 
    !isNaN(formData.amount) && 
    parseFloat(formData.amount) > 0;

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden text-white flex-grow-0 flex items-center bg-manatech-blue">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Make a Payment</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto">
            Securely pay for IT consultations, custom services, or settle an outstanding invoice.
          </p>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Payment Successful!</h3>
                  <p className="text-slate-500 mt-2">Thank you for your business. A receipt has been sent to your email.</p>
                </div>
                <Button onClick={() => { setIsSuccess(false); setFormData({...formData, amount: ''}); }} variant="outline" className="mt-4">
                  Make Another Payment
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <CreditCard className="text-manatech-orange" size={24} />
                  <h2 className="text-xl font-bold text-slate-800">Billing Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} className="bg-slate-50 h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} className="bg-slate-50 h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} className="bg-slate-50 h-12" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="purpose">Payment Purpose</Label>
                    <select
                      id="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="IT Support">IT Support</option>
                      <option value="Data Analysis">Data Analysis</option>
                      <option value="Online Tutoring">Online Tutoring</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Custom Project / Invoice">Custom Project / Pay Invoice</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (GHS)</Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">GH₵</span>
                      <Input id="amount" type="number" min="1" step="0.01" placeholder="0.00" value={formData.amount} onChange={handleChange} className="bg-slate-50 h-12 pl-12 text-lg font-bold" />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  {/* Notice about Public Key */}
                  {publicKey === "pk_test_your_paystack_public_key_here" && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg mb-6 text-sm">
                      <strong>Developer Notice:</strong> This payment form is in placeholder mode. To make it work, add your valid Paystack Public Key to a `.env` file as `VITE_PAYSTACK_PUBLIC_KEY`.
                    </div>
                  )}

                  <div className={`transition-all ${isFormValid ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                    {/* We wrap the Paystack Component in our own styling */}
                    <PaystackButton
                      {...componentProps}
                      className="w-full h-14 rounded-xl bg-manatech-blue hover:bg-slate-900 text-white font-bold tracking-widest uppercase transition-all shadow-xl hover:-translate-y-1"
                    />
                  </div>
                  {!isFormValid && (
                    <p className="text-center text-xs text-slate-500 mt-3">Please fill out all fields and enter a valid amount.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

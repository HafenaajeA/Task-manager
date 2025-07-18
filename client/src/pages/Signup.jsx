import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import {
    Card, CardContent, CardFooter, CardHeader, CardTitle
} from '@/components/ui/card';
import API from '@/services/api';


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!email || !password) return alert('Please fill in all fields');
        setLoading(true);
        try {
            const res = await API.post('/auth/signup', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data?.message || 'Signup failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-900">
        <Card className="w-full max-w-md shadow-xl animate-fade-in">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">Sign Up</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button
                    onClick={handleSignup}
                    disabled={loading}
                    className="w-full"
                >
                    {loading ? 'Signing up...' : 'Sign Up'}
                </Button>
            </CardFooter>
             <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
            </p>
        </Card>
        </div>
    );
}
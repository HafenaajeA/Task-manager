import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login page
    };
    return (
        <nav className='glass sticky top-0 z-50 border-zinc-200 dark:border-zinc-700 flex items-center justify-between px-6 py-3'>
            <Link to='/dashboard' className='font-bold text-lg'>Dev Task Manager</Link>

            <div className='flex items-center gap-2'>
                <ThemeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' size='icon'>
                            <UserCircleIcon className='h-5 w-5' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
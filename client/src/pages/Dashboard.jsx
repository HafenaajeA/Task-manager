import { useState, useEffect } from 'react';
import API from '@/services/api';
import TaskDialog from '@/components/TaskDialog';
import TaskCard from '@/components/TaskCard';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';


export default function Dashboard() {
    const [tasks, setTasks] = useState([]);

    const load = async () => {
        const res= await API.get('/tasks/me');
        setTasks(res.data);
    };
    useEffect(() => {
        load();
    }, []);

    const createTask = async (payload) => {
        const res = await API.post('/tasks', payload);
        setTasks(prev => [...prev, res.data]);
        toast.success("Task created successfully");
    };
    const toggleTask = async (id) => {
        const task = tasks.find(t => t._id === id);
        const res = await API.patch(`/tasks/${id}`, { completed: !task.completed });
        setTasks(prev => prev.map(t => t._id === id ? res.data : t));
    };
    const deleteTask = async (id) => {
        await API.delete(`/tasks/${id}`);
        setTasks(prev => prev.filter(t => t._id !== id));
        toast.success("Task deleted successfully");
    };
    return (
        <>
        <Navbar />
            <main className='max-w 5xl mx-auto p-4'>
                <div className='flex justify-between items-center mb-6'>  
                    <h1 className='text-2xl font-bold'>My Tasks</h1>
                    <TaskDialog onSubmit={createTask} />  
                </div>
                    <section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {tasks.map(t => (
                            <TaskCard
                                key={t._id}
                                task={t}
                                onToggle={toggleTask}
                                onDelete={deleteTask}
                            />
                        ))}
                    </section>
            </main>
                 
        </>
    );
}

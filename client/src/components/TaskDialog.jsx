import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


export default function TaskDialog({ onSubmit}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = () => {
        onSubmit({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Task</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New task</DialogTitle>
                </DialogHeader>
                <Input
                    placeholder="Task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                    placeholder="Task description"
                    className="mt-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            

            <DialogFooter className="mt-4">
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleCreate}>Create Task</Button>  
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
'use client'
import {Button, Input} from "@headlessui/react";
import {SetStateAction, useState} from "react";
import Link from "next/link";
import CrossButton from "@/components/cross-button/page";

export default function Roles(){
    const [roles,setRoles] = useState<string[]>([]);
    const [newRole, setNewRole] = useState("");
    
    function handleInputChange(e: { target: { value: SetStateAction<string>}}){
        return setNewRole(e.target.value);
    }
    function handleAddRole(){
        if(newRole && !roles.includes(newRole)){
            setRoles([...roles,newRole])
            setNewRole("")
        }
    }
    return <>
        <h1 className="font-bold text-center text-4xl text-white mt-3">Step 1: Identifying Roles</h1>
        <p className="font text-justify mx-12 text-xl text-white mt-7">
        In this step, take a moment to reflect on the most important areas of your life. 
        These could include roles like <b> Professional, Parent, Friend, Learner or Individual. </b> 
         Your roles represent the various responsibilities and relationships that define who you are and what matters most to you.
         You&#39;ll use them as a foundation to set meaningful goals and plan tasks for the week, ensuring a balanced and purpose-driven approach to your time.
        </p>
        <p className="font text-justify mx-12 text-xl text-white my-3">
        Once you&#39;ve identified your key roles, List your key roles below to start creating a balanced and purposeful weekly plan.
        </p>
        <div >
            {roles.length  > 0  && (
                <div className="flex flex-col border-2 rounded-lg w-96 m-5">
                    <h2 className="font-bold text-center text-3xl text-white m-3">Your Roles:</h2>
                    <ul className="flex flex-row justify-center">
                    {(roles.map((role, index) => (
                        <li className="font-bold text-center text-2xl text-white m-3" key={index}>{index + 1}. {role} 
                           <CrossButton ele = {role} setArr={setRoles} />
                        </li>
                    )))}
                    </ul>
                </div>
            )}
        </div>
        <div className="flex justify-center my-8">
                <Input 
                value={newRole} 
                onChange={handleInputChange}
                type="text" 
                placeholder="Add New Role"
                />
                <Button 
                onClick={handleAddRole}
                className="rounded bg-sky-600 py-2 mx-2 px-4 text-lg font-bold text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700"
                >
                +
                </Button>
            </div>
            <div className="flex justify-center m-4">
            {/* <Link 
                href="/"
                >
                <Button 
                className="rounded w-16 bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-800 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={roles.length === 0}
                >
                    Back
                </Button>
                </Link> */}
                <Link 
                href="roles/goals"
                >
                <Button
                className="rounded w-16 bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-800 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={roles.length === 0}
                >
                    Next
                </Button>
                </Link>
           </div>
        </>
}
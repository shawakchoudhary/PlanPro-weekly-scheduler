'use client'

import Link from "next/link";
import GoalsCard from "../../../components/goals-card/page";
import { useEffect, useState } from "react";

interface RoleGoals {
  role: string;
  goals: string[];
}
export default function Goals(){
    const [roles,setRoles] = useState<string[]>([]);
    const [rolesGoals,setRolesGoals] = useState<RoleGoals[]>(roles.map((role) => ({ role, goals: [] })));
    useEffect(() => {
        const storedRoles = sessionStorage.getItem('roles');
        if (storedRoles) {
          setRoles(JSON.parse(storedRoles));
        }
      }, []);
    return <>
    <h1 className="font-bold text-center text-4xl text-white mt-3">Step 2: Selecting Goals</h1>
    <p className="font text-justify mx-12 text-xl text-white mt-7">
    Now that you&#39;ve identified your key roles, it&#39;s time to set specific goals for each one. 
    These goals represent what you want to accomplish this week within those roles. 
    Think about what success looks like for each role and focus on goals that are meaningful and actionable.
    </p>
    <p className="font text-justify mx-12 text-xl text-white my-3">
    For example: 
    </p>
    <ul className="font text-justify mx-12 text-xl text-white my-3">
        <li>1. As a <b>Parent</b>, a goal could be <i>&#34;Spend 2 hours on Saturday playing games with my child.&#34;</i></li>
        <li>2. As a <b>Professional</b>, a goal might be <i>&#34;Submit the project proposal by Thursday.&#34;</i></li>
        <li>3. As a <b>Student</b>, a goal could be <i>&#34;Complete two chapters of the biology textbook by Friday.&#34;</i></li>
    </ul>
        <div className="flex justify-center flex-row flex-wrap">
        {roles.length > 0 && (
            roles.map((role,index)=>(
               <div key={index}>
                 <GoalsCard role = {role} setRolesGoals={setRolesGoals}/>
               </div>
            ))
        )}
        </div>
        <div className="flex justify-center">
        <Link
        href="/calender"
        className="rounded w-16 bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        >
            Next
        </Link>
       </div>
    </>
}
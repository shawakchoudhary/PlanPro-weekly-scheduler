'use client'
import GoalsCards from "../../../components/goals-cards/page";
import { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

export interface RoleGoals {
  role: string;
  goals: string[];
}
export default function Goals(){
    const router = useRouter();
    const [rolesGoals,setRolesGoals] = useState<RoleGoals[]>([]);
    useEffect(() => {
        const storedRolesGoals = sessionStorage.getItem('rolesGoals');
        if (storedRolesGoals) {
          setRolesGoals(JSON.parse(storedRolesGoals));
        }

      }, []);

      const handleNext = () => {
        sessionStorage.setItem('rolesGoals', JSON.stringify(rolesGoals));
        router.push('/calendar');
      };
      const isButtonDisabled = rolesGoals.some(rg => rg.goals.length === 0);;
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
            <GoalsCards rolesGoals = {rolesGoals} setRolesGoals={setRolesGoals}/>
        </div>
        <div className="flex justify-center">
        <Button
        onClick={handleNext}
        className="rounded w-16 bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={isButtonDisabled}
        >
            Next
        </Button>
       </div>
    </>
}
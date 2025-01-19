'use client'
import { Button, Input } from "@headlessui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import GoalsCrossButton from "../goals-cross-button/page";

interface RoleGoals {
    role: string;
    goals: string[];
  }

type Props = {
    rolesGoals: RoleGoals[]
    setRolesGoals : Dispatch<SetStateAction<RoleGoals[]>>
}

export default function GoalsCards({rolesGoals,setRolesGoals} : Props){
    const [newGoals, setNewGoals] = useState<Record<string, string>>({});

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, role: string) => {
        setNewGoals({ ...newGoals, [role]: e.target.value });
    };

    const addNewGoal = (role: string) => {
        const newGoal = newGoals[role]?.trim();
        if (!newGoal) return;

        setRolesGoals((prevRolesGoals) =>
            prevRolesGoals.map((rg) => {
                if (rg.role === role) {
                    if (rg.goals.some((goal) => goal.toLowerCase() === newGoal.toLowerCase())) {
                        console.warn(`Goal "${newGoal}" already exists for role "${role}".`);
                        return rg;
                    }
                    return { ...rg, goals: [...rg.goals, newGoal] };
                }
                return rg;
            })
        );

        setNewGoals({ ...newGoals, [role]: "" });
    };
    return <div className="flex justify-center flex-row flex-wrap">
        {rolesGoals.length > 0 && (
            rolesGoals.map((rg,index) => (
                <div key={index} className="flex flex-col border-2 rounded-lg w-96 m-5">
                     <h2 className="font-bold break-words text-center text-wrap text-2xl text-white m-3">{rg.role}</h2>
            <ul className="flex flex-col justify-center">
                {rg.goals.length > 0 && (
                    rg.goals.map((goal,index)=>(
                        <li className="font-bold break-words text-2xl text-wrap text-white p-3" key={index}>{index + 1}.{goal}
                        <GoalsCrossButton role={rg.role} goal={goal} setRolesGoals={setRolesGoals}/> 
                        </li>  
                    ))
                )}
            </ul>
            <div className="flex justify-center my-8">
                            <Input 
                            value={newGoals[rg.role] || ""} 
                            onChange={(e) => handleOnChange(e,rg.role)}
                            type="text" 
                            placeholder="Add New Goal"
                            />
                            <Button 
                           onClick={()=> addNewGoal(rg.role)}
                            className="rounded bg-sky-600 py-2 mx-2 px-4 text-lg font-bold text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700"
                            >
                            +
                            </Button>
                        </div>
                </div>
            )))}
        </div>
}
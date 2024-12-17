import {Button} from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
type Props = {
    ele : String
    arr : String[]
    setArr : Dispatch<SetStateAction<String[]>>
}
export default function CrossButton(props : Props){
    const {ele, arr, setArr} = props;
    function handleCancelClick(role : String){
        setArr(arr.filter((r)=> role !== r))
    }
    return   <Button
                    onClick={()=> handleCancelClick(ele)}
                    className="m-2 bg-red-500 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                aria-label="Close"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
             </Button>
}
import { Checkbox } from "@mui/material";
import { useState } from "react";

const SignUp = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-0 justify-center items-center pl-10 text-[#888888] bg-[#f2f2f6] rounded-tr-md rounded-br-md overflow-hidden relative">
                <svg className='w-4 h-4 absolute left-[14px] top-3 align-baseline inline-block stroke-current fill-none '><use href="#mail"></use></svg>
                <input className="w-[220px] h-10 border border-[#f2f2f6] px-4 text-[14px] leading-normal" placeholder="yours@example.com" />
            </div>
            <div className="flex gap-0 justify-center items-center pl-10 text-[#888888] bg-[#f2f2f6] rounded-tr-md rounded-br-md overflow-hidden relative">
                <svg className='w-4 h-4 absolute left-[14px] top-3 align-baseline inline-block stroke-current fill-none '><use href="#user"></use></svg>
                <input className="w-[220px] h-10 border border-[#f2f2f6] px-4 text-[14px] leading-normal" placeholder="your username" />
            </div>
            <div className="flex gap-0 justify-center items-center pl-10 text-[#888888] bg-[#f2f2f6] rounded-tr-md rounded-br-md overflow-hidden relative">
                <svg className='w-4 h-4 absolute left-[14px] top-3 align-baseline inline-block stroke-current fill-none '><use href="#lock"></use></svg>
                <input type="password" className="w-[220px] h-10 border border-[#f2f2f6] px-4 text-[14px] leading-normal" placeholder="Password" />
            </div>
            <input className="w-[260px] h-10 border border-[#f2f2f6] px-4 text-[14px] leading-normal" placeholder="Enter your Given name" />
            <input className="w-[260px] h-10 border border-[#f2f2f6] px-4 text-[14px] leading-normal" placeholder="Enter your Family name" />
            <div className="flex items-start">
                <Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)} size="small" />
                <span className="text-[12px] leading-4 text-[#888888]">I agree to IP Australia&apos;s privacy notice and terms and conditions.</span>
            </div>

            <button disabled={!checked} className="flex transition-all ease-in-out disabled:bg-[#9b9b9b] justify-center items-center rounded-md w-[300px] bg-[#5d2067] uppercase text-white leading-[42px]">Register</button>
        </div>
    )
}
export default SignUp;
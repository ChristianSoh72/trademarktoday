const Login = () => {

    return (
        <div className="flex flex-col h-full gap-4 justify-start items-center">
            <div className="flex gap-0 justify-center items-center pl-10 text-[#888888] bg-[#f2f2f6] rounded-tr-md rounded-br-md overflow-hidden relative">
                <svg className='w-4 h-4 absolute left-[14px] top-3 align-baseline inline-block stroke-current fill-none '><use href="#user"></use></svg>
                <input className="w-[220px] h-10 border border-[#f2f2f6] px-4 text-[14px] leading-normal" placeholder="Username or Email" />
            </div>
            <div className="flex gap-0 justify-center items-center pl-10 text-[#888888] bg-[#f2f2f6] rounded-tr-md rounded-br-md overflow-hidden relative">
                <svg className='w-4 h-4 absolute left-[14px] top-3 align-baseline inline-block stroke-current fill-none '><use href="#lock"></use></svg>
                <input type="password" className="w-[220px] h-10 border border-[#f2f2f6] px-4 text-[14px] leading-normal" placeholder="Password" />
            </div>
            <a href="#" className="cursor-pointer"><h6 className="text-[14px]">Forgot password?</h6></a>
            <button className="flex justify-center items-center rounded-md w-[300px] bg-[#5d2067] uppercase text-white leading-[42px]">Log In</button>
        </div>
    )
}
export default Login;
import Image from "next/image";
import MyTab from "../../components/MyTab";
import { useState } from "react";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

const Auth = () => {
    const [value, setValue] = useState(0);
    return (
        <div id="login-body" className="bg-[#f2f2f6] w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 w-96 p-5 rounded-md bg-white shadow-[0px_1px_2px_#000]">
                <Image src="/syed-mosawi.png" alt="logo" loading="lazy" width={88} height={58} />
                <h2 className="text-[22px] leading-[30px]">Login to your account</h2>
                <MyTab props={{ value, setValue }} titles={["Log In", "Sign Up"]}>
                    <Login />
                    <SignUp />
                </MyTab>
            </div>
        </div>
    )
}
export default Auth;
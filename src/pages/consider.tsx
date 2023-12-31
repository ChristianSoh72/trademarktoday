import Link from "next/link";
import Checkbox from '@mui/material/Checkbox';
import PortalConsider from "../components/PortalConsider";
import ProgressPane from "../components/ProgressPane";
import { useState } from "react";
import { useRouter } from "next/router";
import ProgressIndicator from "../components/ProgressIndicator";
import { AlertErr } from "../components/AlertContainers";
import TMCheckLayout from "../layout/TMCheckLayout";

const Consider = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [showAlertForCheck, setShowAlertForCheck] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    if (!checked) {
      setShowAlertForCheck(true)
      setShowAlert(true);
      router.push("#main-start-section")
    } else {
      router.push("/select")
    }
  }
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    setShowAlertForCheck(!checked);
  }
  return (
    <>
      <main className='max-w-7xl mx-auto px-6 py-4'>
        <div className="grid gap-y-6">
          <ProgressIndicator stage={1} />
          <AlertErr showAlert={showAlert} msg="You must acknowledge you have read the disclaimer and privacy notice to continue." />
          <section id="contentMain" className="grid grid-cols-12 gap-6">
            <h1 className="font-mont text-[32px] font-bold col-span-12">What to look out for?</h1>
            <PortalConsider
              title="Being too similar"
              message="Aim to be as different as possible from existing trade marks."
              category="Cadbery" />
            <PortalConsider
              title="Being too literal"
              message="Try to avoid trade marks that describe your product or the quality of it."
              category="Good Green Apples" />
            <PortalConsider
              title="Geographical places"
              message="It's difficult to register a trade mark that only contains a geographic location."
              category="Victoria" />
            <PortalConsider
              title="Images of your product"
              message="Trying to register images of common goods or services can be difficult."
              img="/bread.png" />
            <PortalConsider
              title="Common sayings"
              message="Try and avoid phrases that everyone should be able to &nbsp;&nbsp;&nbsp;&nbsp; use."
              category="One stop shop" />
            <div className="flex flex-col gap-1 justify-center items-center col-span-4 p-4 border-[2px] border-dashed border-[#C8CAD0] ">
              <h3 className="font-mont text-[18px] leading-7">Trade marks can be complex</h3>
              <p className="text-[14px] leading-5 text-center">
                Results from the free automated check cannot guarantee an outcome if you decide to apply. If you’d like to speak with an IP
                expert, consider&nbsp;
                <Link href="#" className="underline p-1 hover:no-underline hover:bg-[#E0F3F4] font-bold" >
                  professional assistance&nbsp;
                  <svg className='w-[12.38px] h-[12.38px] align-baseline inline-block stroke-black fill-none'><use href="#external-link"></use></svg>
                </Link>.
              </p>
            </div>
            <div className="col-span-12 flex flex-col">
              <div className="flex gap-2 items-center">
                <Checkbox size="small" checked={checked} onChange={handleCheck} />
                <p className="text-[16px] leading-6">
                  I have read the
                  <Link href="#" className="underline p-1 hover:no-underline hover:bg-[#F2F2F6] font-bold" >
                    disclaimer
                  </Link>
                  and
                  <Link href="#" className="underline p-1 hover:no-underline hover:bg-[#F2F2F6] font-bold" >
                    privacy notice
                  </Link>.
                </p>
              </div>
              {showAlertForCheck && <p id="alert-check" className="pl-2 text-[14px] leading-6 text-[#c12]">You must acknowledge you have read the disclaimer and privacy notice to continue.</p>}
            </div>

          </section>
        </div>
      </main>
      <div className="col-span-12 py-4 sticky w-full bottom-0 bg-white shadow-[0_-1px_2px_#000]">
        <div className="max-w-7xl mx-auto px-6 ">
          <button onClick={handleClick} className='rounded-md font-semibold hover:bg-[#72757E] transition-all ease-in-out bg-[#1D252C] w-[140px] h-[46px] text-white'>Ok, got it</button>
        </div>
      </div>
    </>
  )
}
Consider.getLayout = TMCheckLayout;
export default Consider;
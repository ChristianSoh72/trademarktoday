import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRouter } from 'next/router';

type ModalType = {
    openState:
    {
        open: boolean,
        setOpen: React.Dispatch<React.SetStateAction<boolean>>
    },
    children: React.ReactNode
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
const ModalContainer = ({ openState: { open, setOpen }, children, title, msg }: ModalType & {title:string, msg:string}) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box borderRadius={2} sx={style}>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <h2 className='font-mont text-[24px] leading-9'>{title}</h2>
                        <button onClick={() => setOpen(false)} className="flex flex-col justify-center items-center w-12 h-12  border-[#040C13] hover:border rounded-md">
                            <svg className='self-center w-[22px] h-[22px] align-baseline inline-block stroke-black'><use href="#x"></use></svg>
                        </button>
                    </div>
                    <p>{msg}</p>
                    {children}
                </div>
            </Box>
        </Modal>
    )
}


export function ConfirmStartAgainModal({ openState: { open, setOpen }, children }: ModalType) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();
    return (
        <div>
            {children}
            <ModalContainer openState={{open, setOpen}} title="Clear search details?" msg="Starting again will clear your current trade mark and class selections." >
                <div className='flex gap-4'>
                    <button onClick={() => router.push('/select')} className='rounded-md w-full font-semibold hover:bg-[#72757E] transition-all flex justify-center gap-4 items-center ease-in-out bg-[#1D252C] h-[46px] text-white'>
                        Yes, start again
                    </button>
                    <button onClick={() => setOpen(false)} className='rounded-md w-full font-semibold hover:bg-[#72757E] transition-all flex justify-center gap-4 items-center ease-in-out text-[#1D252C] h-[46px] bg-white border border-black hover:text-white'>
                        Cancel
                    </button>
                </div>
            </ModalContainer >
        </div >
    );
}
export function ConfirmSignForApplyModal({ openState: { open, setOpen }, children }: ModalType) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();
    return (
        <div>
            {children}
            <ModalContainer openState={{open, setOpen}} title="Apply with your IP Australia account" msg="Doing so means you can manage your trade mark request and we can contact you later with any updates." >
                <div className='flex gap-4'>
                    <button onClick={() => router.push('/auth')} className='rounded-md w-full font-semibold hover:bg-[#72757E] transition-all flex justify-center gap-4 items-center ease-in-out bg-[#1D252C] h-[46px] text-white'>
                        Login
                    </button>
                    <button onClick={() => router.push('/auth')} className='rounded-md w-full font-semibold hover:bg-[#72757E] transition-all flex justify-center gap-4 items-center ease-in-out text-[#1D252C] h-[46px] bg-white border border-black hover:text-white'>
                        Sign up
                    </button>
                </div>
            </ModalContainer >
        </div >
    );
}
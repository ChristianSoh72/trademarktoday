import TMCheckLayout from '../layout/TMCheckLayout';
import { Alert3 } from '@/components/AlertContainers';
import { Context, User } from '@/types/interface';
import ServerSideProps from '@/layout/ServerSideProps';
import Link from 'next/link';
import Image from 'next/image';
import PortalClass from '@/components/PortalClass';
import UserInfoAvatar from '@/components/UserInfoAvatar';
const Dashboard = ({ user }: { user: User }) => {

  return (
    <>
      {user && <UserInfoAvatar user={user}/>}
      <main className='max-w-7xl mx-auto px-6 py-4'>
        <div className="grid gap-y-6">
          <h1 className='font-mont text-3xl'>Dashboard Test</h1>

          <Alert3 msg={
            <>
              This page is only for testing purpose. <strong>You should see this page because you have logged in.</strong>
            </>
          } />
        </div>
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
        <PortalClass />
      </main>
    </>
  )
}
Dashboard.getLayout = TMCheckLayout;
export const getServerSideProps = ServerSideProps;
export default Dashboard;
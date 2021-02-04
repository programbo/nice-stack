import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

import { Card, Space, Typography } from '@supabase/ui'

import { supabase } from '../../utils/supabase'

export default function Profile({ user }) {
  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <Card>
        <Space direction="vertical" size={6}>
          <Typography.Text>You're signed in</Typography.Text>
          <Typography.Text strong>Email: {user.email}</Typography.Text>
          <Typography.Text type="success">
            User data retrieved server-side (from Cookie in getServerSideProps):
          </Typography.Text>

          <Typography.Text>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Typography.Text>

          <Typography.Text>
            <Link href="/profile/with-swr">
              <a>Static example with useSWR</a>
            </Link>
          </Typography.Text>
        </Space>
      </Card>
    </div>
  )
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  // If no user, redirect to index.
  if (!user) {
    return { props: {}, redirect: { destination: '/swr', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}

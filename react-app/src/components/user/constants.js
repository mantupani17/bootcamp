import { DeleteFilled, EyeFilled, LockFilled, UnlockFilled } from "@ant-design/icons"
import { Space, Tag } from "antd"
import { store } from "../../redux-mgmt/store"
import { deleteUser } from "../../redux-mgmt/user-reducer/user.reducer"

const handleOnDelete = (data) => {
  const { _id } = data
  console.log(data)
  store.dispatch(deleteUser({ _id })).unwrap()
}

export const userColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => {
        return <>{text}</>
      },
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        render: (text) => (
            <Space size="middle">
                <a href='#'>{text}</a>
            </Space>
        ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        return new Date(text).toDateString()
      },
    },
    {
        title: 'Modified At',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        render: (text) => {
            return new Date(text).toDateString()
        },
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text) => {
          const [label, color] = text ? text.split("##") : []
          return <Tag color={color} key={label}>{label}</Tag>
        }
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <EyeFilled style={{ fontSize: '16px'}}/>
                <LockFilled style={{ fontSize: '16px'}}/>
                <UnlockFilled style={{ fontSize: '16px'}}/>
                <DeleteFilled style={{ fontSize: '16px', color: 'red' }} onClick={()=>{
                  handleOnDelete(record)
                }}/>
            </Space>
        ),
    },
    
]
import React from 'react';
import { Row, Table  } from 'antd';
import { useAppSelector } from './../../redux-mgmt/hooks'
import { getUsersError, getUsersStatus, selectAllUsers } from '../../redux-mgmt/user-reducer/user.reducer'
import { userColumns } from './constants';

export const User = (props) =>{   
    const users = useAppSelector(selectAllUsers);
    const status = useAppSelector(getUsersStatus);
    const error = useAppSelector(getUsersError);
    if (status == 'loading') {
        return <>Loading...</>
    } else if (status == 'failed') {
        return <>{error}</>
    } 
    const columns = userColumns
    return (
        <Row className='profile-details' align={'middle'}>
            <Table columns={columns} dataSource={users} />
        </Row>
    );
} 

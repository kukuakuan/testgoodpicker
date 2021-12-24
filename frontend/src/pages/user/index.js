import './style.scss'
import { Row, Col, Layout, Skeleton } from "antd"
import React, { Suspense } from 'react'
import SiteLayout from "../../components/layouts/site-layout"
import AvatarSide from "./avatar"
import ContentSide from "./content"
import Custom404 from "../404"
import { useAuthState } from "../../hooks/useAuth"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"



const UserPage = () => {
    const { user, cookies} = useAuthState()
    
    const history = useHistory()

    
    return (
        <SiteLayout>
                {cookies['gp_token']? (
                    <Col className="user-main-content" span={18}>
                        <Row className="user-avatar-side">
                            <AvatarSide/>
                        </Row>

                        <Row className="user-content-side">
                            <ContentSide/>
                        </Row>
                    </Col>
                    ):(
                        history.push("/")
                    )
                }
        </SiteLayout>
    )
}

export default UserPage



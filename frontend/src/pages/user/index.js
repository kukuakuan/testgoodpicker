import './style.scss'
import { Row, Col } from "antd"
import React from 'react'
import SiteLayout from "../../components/layouts/site-layout"
import AvatarSide from "./avatar"
import ContentSide from "./content"
import { useAuthState } from "../../hooks/useAuth"
import { useHistory } from "react-router-dom"




const UserPage = () => {
    const { cookies} = useAuthState()
    
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



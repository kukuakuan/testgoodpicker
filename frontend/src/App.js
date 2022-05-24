import React from 'react'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import UserProfilePage from './pages/profile'
import UserPage from './pages/user'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import AboutUs from './pages/about-us'
import NewPost from './pages/new-post'

import Custom404 from './pages/404'
import SearchPage from './pages/search'
import Chat from './pages/chat'
import { useAuthState, useAuthenticate, useLogout } from './hooks/useAuth'
import AuthService from './service/AuthService'
import GoodsPage from './pages/goods'

function App() {
	const { user, cookies } = useAuthState()
	const authenicate = useAuthenticate()
	const logout = useLogout()

	React.useLayoutEffect(() => {
		if (cookies['gp_token'] && !user) {
			AuthService.getMe(cookies['gp_token'])
				.then(res =>
					authenicate({ user: res.data, token: cookies['gp_token'] })
				)
				.catch(err => logout())
		}
	}, [cookies, user, authenicate, logout])

	return (
		<BrowserRouter>
			<div className="App">
				<div className="content">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/profile" component={UserProfilePage} />
						<Route exact path="/about-us" component={AboutUs} />
						<Route exact path="/new-post" component={NewPost} />
						<Route exact path="/users" component={UserPage} />
						<Route exact path="/search" component={SearchPage} />
						<Route exact path="/chat/:chatID/" component={Chat} />
						<Route exact path="/goods/:goodsId" component={GoodsPage} />
						<Route component={Custom404} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App

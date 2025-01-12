import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MyPage from './pages/MyPage.jsx';
import EditPage from './pages/EditPage.jsx';
import PhotoSelectionPage from './pages/PhotoSelectionPage.jsx';
import OptionSelectionPage from './pages/OptionSelectionPage.jsx';
import AccountInfoPage from './pages/AccountInfoPage.jsx';
import LoadingPage from './pages/LoadingPage.jsx';
import WeddingInvitationPage from './pages/WeddingInvitationPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFound />,
	},
	{
		path: 'login',
		element: <LoginPage />,
	},
	{
		path: 'my',
		element: <MyPage />,
	},
	{
		path: 'edit',
		element: <EditPage />,
	},
	{
		path: 'photo-selection',
		element: <PhotoSelectionPage />,
	},
	{
		path: 'option-selection',
		element: <OptionSelectionPage />,
	},
	{
		path: 'account-information',
		element: <AccountInfoPage />,
	},
	{
		path: 'loading',
		element: <LoadingPage />,
	},
	{
		path: 'wedding-invitation',
		element: <WeddingInvitationPage />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MyPage from './pages/MyPage.jsx';
import EditPage from './pages/EditPage.jsx';
import MainPhotoSelectionPage from './pages/MainPhotoSelectionPage.jsx';
import GalleryPhotoSelectionPage from './pages/GalleryPhotoSelectionPage.jsx';
import OptionSelectionPage from './pages/OptionSelectionPage.jsx';
import AccountInfoPage from './pages/AccountInfoPage.jsx';
import LoadingPage from './pages/LoadingPage.jsx';
import WeddingInvitationPage from './pages/WeddingInvitationPage.jsx';
import PreviewInvitationPage from './pages/PreviewInvitationPage.jsx';
import AnalysisPage from './pages/AnalysisPage.jsx';

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
		path: 'edit/:invitationId',
		element: <EditPage />,
	},
	{
		path: 'main-photo-selection',
		element: <MainPhotoSelectionPage />,
	},
	{
		path: 'gallery-photo-selection',
		element: <GalleryPhotoSelectionPage />,
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
		path: 'wedding-invitation/:invitationId',
		element: <WeddingInvitationPage />,
	},
	{
		path: 'invitations/:uniqueId',
		element: <WeddingInvitationPage />,
	},
	{
		path: 'preview-invitation',
		element: <PreviewInvitationPage />,
	},
	{
		path: '/analysis/:invitationId',
		element: <AnalysisPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

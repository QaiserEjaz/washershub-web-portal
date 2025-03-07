import { useNavigate } from 'react-router-dom';

const NavigationHelper = () => {
  const navigate = useNavigate();

  const goTo = (path, state = {}) => {
    navigate(path, { state });
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/home');
  };

  return { goTo, goBack, goHome };
};

export default NavigationHelper;
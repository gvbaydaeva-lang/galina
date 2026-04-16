import { useIsMobile } from './hooks/useIsMobile';
import DesktopApp from './DesktopApp';
import MobileApp from './MobileApp';

const App = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileApp /> : <DesktopApp />;
};

export default App;

import { ReactComponent as LogoLight } from '../../assets/img/logo/logoLight.svg';
import { ReactComponent as LogoDark } from '../../assets/img/logo/logoDark.svg';

export default function Logo({ isDarkTheme }) {
    return (
      <div>
        {isDarkTheme ? <LogoDark /> : <LogoLight />}
      </div>
    );
  }
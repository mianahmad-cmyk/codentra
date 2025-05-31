import { Link } from 'react-router-dom';
import { COMPANY } from '../../utils/constants';

interface LogoProps {
  white?: boolean;
}

const Logo = ({ white = false }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 512 512" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3"
        >
          <circle 
            cx="256" 
            cy="256" 
            r="240" 
            stroke={white ? "#ffffff" : "#0891B2"} 
            strokeWidth="32" 
          />
          <path 
            d="M205 170L150 256L205 342" 
            stroke={white ? "#ffffff" : "#002B5B"} 
            strokeWidth="24" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M307 170L362 256L307 342" 
            stroke={white ? "#ffffff" : "#002B5B"} 
            strokeWidth="24" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <h1 className={`font-bold text-2xl ${white ? 'text-white' : 'text-secondary-700'}`}>
            {COMPANY.name}
          </h1>
          <p className={`text-xs ${white ? 'text-gray-300' : 'text-gray-600'}`}>
            {COMPANY.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
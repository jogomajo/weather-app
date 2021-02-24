import { createGlobalStyle } from 'styled-components';

import Righteous from './Righteous-Regular.ttf';
import MontserratRegular from './Montserrat-Regular.ttf';
import MontserratMedium from './Montserrat-Medium.ttf';
import MontserratSemiBold from './Montserrat-SemiBold.ttf';
import MontserratBold from './Montserrat-Bold.ttf';
import MontserratExtraBold from './Montserrat-ExtraBold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Righteous';
        src: url(${Righteous});
        font-weight: 700;
        font-style: bold;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegular});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratMedium});
        font-weight: 500;
        font-style: medium;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratSemiBold});
        font-weight: 600;
        font-style: semi-bold;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratBold});
        font-weight: 700;
        font-style: bold;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratExtraBold});
        font-weight: 800;
        font-style: extra-bold;
    }
`;

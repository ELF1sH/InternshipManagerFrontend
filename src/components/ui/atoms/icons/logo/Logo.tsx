import React from 'react';

import { IconProps } from 'components/ui/atoms/icons/interfaces/iconProps';

const Logo: React.FC<IconProps> = ({ size = 155, color = 'currentColor', ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={size}
    height={size / 1.26}
    viewBox={`0 0 ${size} ${size / 1.26}`}
    {...restProps}
  >
    <path d="M36.2222 67V19.8729L53.1574 0L36.2222 67Z" fill={color} />
    <path d="M42.8241 64.7288L58.3241 17.0339L75.5463 5.67797L42.8241 64.7288Z" fill={color} />
    <path d="M51.7222 63.0254L75.5463 24.4153L93.3426 17.0339L51.7222 63.0254Z" fill={color} />
    <path d="M60.6204 58.4831L90.7593 32.0805L107.12 26.6864L60.6204 58.4831Z" fill={color} />
    <path d="M75.5463 58.4831L99.3704 42.3008L117.454 38.6102L105.685 46.2754L75.5463 58.4831Z" fill={color} />
    <path d="M89.6111 59.9025L108.556 51.9534H124.63L112.861 56.2119L89.6111 59.9025Z" fill={color} />
    <path d="M105.685 63.0254L121.185 59.9025H132.667L121.185 63.0254H105.685Z" fill={color} />
    <path d="M117.454 67L127.787 64.7288L143 67H117.454Z" fill={color} />
    <path d="M33.0648 67L24.1667 44.8559L30.4815 32.0805L33.0648 67Z" fill={color} />
    <path d="M27.6111 67L19 64.7288L21.0093 52.8051L27.6111 67Z" fill={color} />
    <path d="M4.65289 86V73.04H6.82189V86H4.65289ZM9.51781 86V73.04H11.7138L17.7258 82.175V73.04H19.9218V86H17.7258L11.7138 76.865V86H9.51781ZM25.5517 86V75.074H21.3577V73.04H31.9147V75.074H27.7207V86H25.5517ZM33.3538 86V73.04H41.7238V75.074H35.5228V78.269H40.6438V80.303H35.5228V83.966H41.7238V86H33.3538ZM43.883 86V73.04H49.238C49.364 73.04 49.526 73.046 49.724 73.058C49.922 73.064 50.105 73.082 50.273 73.112C51.023 73.226 51.641 73.475 52.127 73.859C52.619 74.243 52.982 74.729 53.216 75.317C53.456 75.899 53.576 76.547 53.576 77.261C53.576 78.317 53.309 79.226 52.775 79.988C52.241 80.744 51.422 81.212 50.318 81.392L49.391 81.473H46.052V86H43.883ZM51.326 86L48.77 80.726L50.975 80.24L53.783 86H51.326ZM46.052 79.448H49.148C49.268 79.448 49.403 79.442 49.553 79.43C49.703 79.418 49.841 79.394 49.967 79.358C50.327 79.268 50.609 79.109 50.813 78.881C51.023 78.653 51.17 78.395 51.254 78.107C51.344 77.819 51.389 77.537 51.389 77.261C51.389 76.985 51.344 76.703 51.254 76.415C51.17 76.121 51.023 75.86 50.813 75.632C50.609 75.404 50.327 75.245 49.967 75.155C49.841 75.119 49.703 75.098 49.553 75.092C49.403 75.08 49.268 75.074 49.148 75.074H46.052V79.448ZM55.7659 86V73.04H57.9619L63.9739 82.175V73.04H66.1699V86H63.9739L57.9619 76.865V86H55.7659ZM73.4828 86.27C72.5348 86.27 71.6798 86.105 70.9178 85.775C70.1618 85.445 69.5378 84.974 69.0458 84.362C68.5598 83.744 68.2508 83.012 68.1188 82.166L70.3688 81.824C70.5608 82.592 70.9538 83.186 71.5478 83.606C72.1478 84.026 72.8378 84.236 73.6178 84.236C74.0798 84.236 74.5148 84.164 74.9228 84.02C75.3308 83.876 75.6608 83.666 75.9128 83.39C76.1708 83.114 76.2998 82.775 76.2998 82.373C76.2998 82.193 76.2698 82.028 76.2098 81.878C76.1498 81.722 76.0598 81.584 75.9398 81.464C75.8258 81.344 75.6758 81.236 75.4898 81.14C75.3098 81.038 75.0998 80.951 74.8598 80.879L71.5118 79.889C71.2238 79.805 70.9118 79.694 70.5758 79.556C70.2458 79.412 69.9308 79.217 69.6308 78.971C69.3368 78.719 69.0938 78.401 68.9018 78.017C68.7158 77.627 68.6228 77.147 68.6228 76.577C68.6228 75.743 68.8328 75.044 69.2528 74.48C69.6788 73.91 70.2488 73.484 70.9628 73.202C71.6828 72.92 72.4808 72.782 73.3568 72.788C74.2448 72.794 75.0368 72.947 75.7328 73.247C76.4288 73.541 77.0108 73.97 77.4788 74.534C77.9468 75.098 78.2768 75.779 78.4688 76.577L76.1378 76.982C76.0418 76.526 75.8558 76.139 75.5798 75.821C75.3098 75.497 74.9768 75.251 74.5808 75.083C74.1908 74.915 73.7738 74.825 73.3298 74.813C72.8978 74.807 72.4958 74.873 72.1238 75.011C71.7578 75.143 71.4608 75.335 71.2328 75.587C71.0108 75.839 70.8998 76.133 70.8998 76.469C70.8998 76.787 70.9958 77.048 71.1878 77.252C71.3798 77.45 71.6168 77.609 71.8988 77.729C72.1868 77.843 72.4778 77.939 72.7718 78.017L75.0938 78.665C75.4118 78.749 75.7688 78.863 76.1648 79.007C76.5608 79.151 76.9418 79.352 77.3078 79.61C77.6738 79.868 77.9738 80.207 78.2078 80.627C78.4478 81.047 78.5678 81.581 78.5678 82.229C78.5678 82.901 78.4268 83.492 78.1448 84.002C77.8688 84.506 77.4938 84.926 77.0198 85.262C76.5458 85.598 76.0028 85.85 75.3908 86.018C74.7848 86.186 74.1488 86.27 73.4828 86.27ZM80.5159 86V73.04H82.6849V78.494H88.8229V73.04H90.9829V86H88.8229V80.528H82.6849V86H80.5159ZM93.6861 86V73.04H95.8551V86H93.6861ZM98.551 86V73.04H103.906C104.032 73.04 104.194 73.046 104.392 73.058C104.59 73.064 104.773 73.082 104.941 73.112C105.691 73.226 106.309 73.475 106.795 73.859C107.287 74.243 107.65 74.729 107.884 75.317C108.124 75.899 108.244 76.547 108.244 77.261C108.244 77.969 108.124 78.617 107.884 79.205C107.644 79.787 107.278 80.27 106.786 80.654C106.3 81.038 105.685 81.287 104.941 81.401C104.773 81.425 104.587 81.443 104.383 81.455C104.185 81.467 104.026 81.473 103.906 81.473H100.72V86H98.551ZM100.72 79.448H103.816C103.936 79.448 104.071 79.442 104.221 79.43C104.371 79.418 104.509 79.394 104.635 79.358C104.995 79.268 105.277 79.109 105.481 78.881C105.691 78.653 105.838 78.395 105.922 78.107C106.012 77.819 106.057 77.537 106.057 77.261C106.057 76.985 106.012 76.703 105.922 76.415C105.838 76.121 105.691 75.86 105.481 75.632C105.277 75.404 104.995 75.245 104.635 75.155C104.509 75.119 104.371 75.098 104.221 75.092C104.071 75.08 103.936 75.074 103.816 75.074H100.72V79.448ZM13.4026 103V90.04H15.3556L19.8376 99.22L24.3196 90.04H26.2726V103H24.2476V94.693L20.2696 103H19.4056L15.4366 94.693V103H13.4026ZM27.901 103L31.987 90.04H35.164L39.25 103H37.018L33.31 91.372H33.796L30.133 103H27.901ZM30.178 100.192V98.167H36.982V100.192H30.178ZM40.8772 103V90.04H43.0732L49.0852 99.175V90.04H51.2812V103H49.0852L43.0732 93.865V103H40.8772ZM52.8971 103L56.9831 90.04H60.1601L64.2461 103H62.0141L58.3061 91.372H58.7921L55.1291 103H52.8971ZM55.1741 100.192V98.167H61.9781V100.192H55.1741ZM70.8677 103.27C70.0277 103.27 69.2387 103.123 68.5007 102.829C67.7687 102.529 67.1237 102.091 66.5657 101.515C66.0137 100.939 65.5817 100.234 65.2697 99.4C64.9577 98.56 64.8017 97.6 64.8017 96.52C64.8017 95.104 65.0657 93.895 65.5937 92.893C66.1217 91.885 66.8447 91.114 67.7627 90.58C68.6807 90.04 69.7157 89.77 70.8677 89.77C72.4637 89.77 73.7267 90.142 74.6567 90.886C75.5927 91.624 76.2257 92.662 76.5557 94L74.3417 94.351C74.0957 93.583 73.6937 92.971 73.1357 92.515C72.5777 92.053 71.8667 91.822 71.0027 91.822C70.1327 91.81 69.4097 91.999 68.8337 92.389C68.2577 92.779 67.8227 93.328 67.5287 94.036C67.2407 94.744 67.0967 95.572 67.0967 96.52C67.0967 97.468 67.2407 98.293 67.5287 98.995C67.8167 99.691 68.2487 100.234 68.8247 100.624C69.4067 101.014 70.1327 101.215 71.0027 101.227C71.6567 101.233 72.2297 101.116 72.7217 100.876C73.2137 100.63 73.6157 100.261 73.9277 99.769C74.2397 99.271 74.4497 98.65 74.5577 97.906H72.2717V96.205H76.8617C76.8737 96.301 76.8827 96.442 76.8887 96.628C76.8947 96.814 76.8977 96.925 76.8977 96.961C76.8977 98.185 76.6547 99.274 76.1687 100.228C75.6887 101.176 74.9987 101.92 74.0987 102.46C73.1987 103 72.1217 103.27 70.8677 103.27ZM78.7053 103V90.04H87.0753V92.074H80.8743V95.269H85.9953V97.303H80.8743V100.966H87.0753V103H78.7053ZM89.2346 103V90.04H94.5896C94.7156 90.04 94.8776 90.046 95.0756 90.058C95.2736 90.064 95.4566 90.082 95.6246 90.112C96.3746 90.226 96.9926 90.475 97.4786 90.859C97.9706 91.243 98.3336 91.729 98.5676 92.317C98.8076 92.899 98.9276 93.547 98.9276 94.261C98.9276 95.317 98.6606 96.226 98.1266 96.988C97.5926 97.744 96.7736 98.212 95.6696 98.392L94.7426 98.473H91.4036V103H89.2346ZM96.6776 103L94.1216 97.726L96.3266 97.24L99.1346 103H96.6776ZM91.4036 96.448H94.4996C94.6196 96.448 94.7546 96.442 94.9046 96.43C95.0546 96.418 95.1926 96.394 95.3186 96.358C95.6786 96.268 95.9606 96.109 96.1646 95.881C96.3746 95.653 96.5216 95.395 96.6056 95.107C96.6956 94.819 96.7406 94.537 96.7406 94.261C96.7406 93.985 96.6956 93.703 96.6056 93.415C96.5216 93.121 96.3746 92.86 96.1646 92.632C95.9606 92.404 95.6786 92.245 95.3186 92.155C95.1926 92.119 95.0546 92.098 94.9046 92.092C94.7546 92.08 94.6196 92.074 94.4996 92.074H91.4036V96.448Z" fill={color} />
    <path d="M129.607 118.41L127.007 118.483L125.533 118.241C124.723 118.107 123.397 117.789 122.587 117.534C121.776 117.279 120.533 116.804 119.824 116.478C119.115 116.152 117.786 115.387 116.87 114.778L115.205 113.669L113.479 111.875L111.753 110.081L111.06 109.002C110.679 108.409 110.32 107.922 110.264 107.922C110.207 107.921 109.817 108.739 109.397 109.74L108.633 111.56H107.203C106.417 111.56 105.773 111.51 105.773 111.45C105.773 111.389 106.414 109.829 107.196 107.983L108.619 104.627H110.132H111.644L112.194 105.709C112.497 106.304 113.133 107.354 113.609 108.042L114.474 109.293L115.814 110.573C116.551 111.277 117.615 112.167 118.18 112.55C118.745 112.933 119.77 113.53 120.458 113.876C121.146 114.222 122.283 114.698 122.985 114.934C123.688 115.17 124.997 115.482 125.894 115.627L127.527 115.892L128.857 115.893C129.589 115.893 130.79 115.81 131.525 115.707C132.26 115.605 133.532 115.327 134.352 115.089L135.843 114.657L137.405 113.886L138.967 113.115L140.18 112.212C140.847 111.715 141.824 110.878 142.351 110.351C142.878 109.824 143.717 108.847 144.215 108.18L145.122 106.967L145.891 105.407C146.314 104.549 146.823 103.34 147.022 102.72C147.222 102.1 147.499 100.94 147.639 100.141L147.893 98.688V97.324V95.96H149.193H150.493V97.584V99.208L150.227 100.736C150.08 101.577 149.764 102.854 149.525 103.575C149.285 104.297 148.745 105.599 148.324 106.469L147.559 108.052L146.283 109.763L145.006 111.473L143.844 112.556C143.204 113.152 142.118 114.037 141.431 114.522C140.743 115.008 139.577 115.71 138.84 116.083C138.103 116.455 136.972 116.961 136.327 117.206C135.681 117.452 134.49 117.806 133.68 117.994L132.207 118.336L129.607 118.41ZM133.902 111.718C133.732 111.709 133.35 111.631 133.052 111.545C132.754 111.459 132.413 111.271 132.294 111.127L132.078 110.867L132.288 110.613L132.498 110.36L132.902 110.624L133.305 110.888L134.056 110.834L134.807 110.78V110.354V109.929L134.099 109.724C133.709 109.611 133.144 109.391 132.842 109.235L132.293 108.951V108.26V107.568L132.857 107.225L133.42 106.881L133.914 106.881C134.185 106.88 134.673 107.006 134.997 107.16C135.321 107.314 135.587 107.493 135.587 107.558C135.587 107.624 135.5 107.764 135.395 107.869L135.204 108.06L134.591 107.804L133.977 107.548L133.588 107.646L133.198 107.744L133.092 108.021C133.033 108.173 133.025 108.362 133.073 108.44C133.121 108.518 133.557 108.683 134.041 108.807L134.921 109.033L135.341 109.421L135.76 109.81V110.176C135.76 110.378 135.676 110.7 135.573 110.893L135.385 111.243L134.798 111.488C134.475 111.623 134.072 111.726 133.902 111.718ZM122.847 111.56H122.413V109.307V107.053H122.847H123.28V107.92V108.787H124.493H125.707V107.92V107.053H126.053H126.4V109.307V111.56H126.053H125.707V110.607V109.653H124.493H123.28V110.607V111.56H122.847ZM127.44 111.56H127.093V109.307V107.053H127.44H127.787V109.307V111.56H127.44ZM130.127 111.56H129.693V109.653V107.747H129H128.307V107.4V107.053H130.139H131.972L131.915 107.357L131.857 107.66L131.209 107.714L130.56 107.768V109.664V111.56H130.127ZM115.003 102.85L103.173 102.907V102.791C103.173 102.727 103.727 101.905 104.403 100.964L105.633 99.2534H115.745H125.857L125.969 98.8984L126.082 98.5434L125.884 98.3048L125.686 98.0661L121.32 98.0097L116.953 97.9534L116.238 97.571C115.845 97.3607 115.322 96.9487 115.075 96.6556L114.627 96.1226L114.448 95.478C114.349 95.1235 114.269 94.6384 114.269 94.4C114.269 94.1617 114.354 93.6547 114.458 93.2734C114.562 92.892 114.831 92.337 115.055 92.04L115.462 91.5L116.294 91.0867L117.127 90.6734L135.89 90.6263C146.21 90.6004 154.653 90.6253 154.653 90.6816C154.653 90.738 154.141 91.5001 153.515 92.3754L152.377 93.9667L135.395 94.0534L118.414 94.14L118.259 94.3907L118.104 94.6414L118.272 94.954L118.439 95.2667H122.128H125.816L126.845 95.4522L127.873 95.6376L128.537 96.0703L129.201 96.503L129.53 97.2282L129.859 97.9534L129.863 98.7452L129.867 99.5371L129.603 100.426L129.339 101.315L128.729 101.817C128.394 102.093 127.83 102.426 127.477 102.556L126.833 102.793L115.003 102.85ZM136.237 102.716L131.08 102.72V98.9934V95.2667H137.081H143.081L142.594 95.9167C142.326 96.2742 141.842 96.9177 141.519 97.3467C141.195 97.7757 140.84 98.1372 140.729 98.15C140.618 98.1629 139.103 98.1824 137.363 98.1934L134.2 98.2134V98.8173V99.4212L138.959 99.4673L143.719 99.5134L142.556 101.113L141.393 102.712L136.237 102.716ZM108.799 97.4836L107.578 97.5338L107.456 97.4114C107.388 97.344 107.334 96.8534 107.334 96.3212C107.335 95.7889 107.449 94.6124 107.588 93.7067C107.728 92.801 108.005 91.475 108.205 90.76C108.405 90.045 108.916 88.7268 109.339 87.8307C109.763 86.9345 110.547 85.544 111.081 84.7407L112.053 83.28L113.55 81.7719C114.373 80.9424 115.568 79.8925 116.204 79.4388C116.841 78.9851 117.929 78.3023 118.622 77.9215C119.314 77.5407 120.591 76.9633 121.458 76.6385L123.035 76.0479L124.788 75.6906L126.541 75.3334L128.854 75.3339L131.167 75.3345L132.727 75.605C133.585 75.7538 134.966 76.1021 135.797 76.3789C136.627 76.6558 137.875 77.1678 138.57 77.5167C139.265 77.8657 140.506 78.6112 141.329 79.1734L142.824 80.1956L144.367 81.7945C145.216 82.6739 146.256 83.8884 146.678 84.4935L147.447 85.5936L147.757 84.9268C147.928 84.5601 148.298 83.7335 148.58 83.09L149.092 81.92H150.567H152.042L151.949 82.1646C151.897 82.2991 151.245 83.8396 150.501 85.5879L149.146 88.7667L147.61 88.8143L146.073 88.8619L145.51 87.7743C145.2 87.1761 144.561 86.1741 144.089 85.5476C143.618 84.9211 142.653 83.8583 141.945 83.1857C141.237 82.5131 140.17 81.6316 139.573 81.2267C138.977 80.8218 137.76 80.1452 136.869 79.7231L135.249 78.9558L133.555 78.5253L131.86 78.0948L130.006 77.9881L128.153 77.8815L126.546 78.1011C125.662 78.2219 124.342 78.4992 123.613 78.7174C122.884 78.9356 121.709 79.3813 121.003 79.708C120.296 80.0346 119.167 80.6646 118.494 81.1079C117.821 81.5512 116.752 82.3885 116.119 82.9684L114.969 84.0227L113.898 85.4414L112.827 86.86L111.991 88.5934L111.155 90.3267L110.703 91.8867L110.251 93.4467L110.136 95.44L110.02 97.4334L108.799 97.4836ZM125.1 86.6H124.667V84.6067V82.6134H124.06H123.453V82.2667V81.92H125.081H126.71L126.815 82.1942C126.873 82.345 126.92 82.501 126.92 82.5409C126.92 82.5808 126.608 82.6134 126.227 82.6134H125.533V84.6067V86.6H125.1ZM128.589 86.6H127.987L127.448 86.1466L126.909 85.6931L127.209 85.4736L127.509 85.2541L127.981 85.6027L128.452 85.9513L128.907 85.8372L129.362 85.723L129.46 85.466L129.559 85.209L129.368 84.9792C129.263 84.8529 128.869 84.657 128.491 84.5439L127.805 84.3384L127.462 83.9021L127.119 83.4658L127.198 82.9962L127.278 82.5267L127.638 82.2234L127.998 81.92H128.74H129.482L129.891 82.2544L130.3 82.5888L130.088 82.8044L129.876 83.02L129.43 82.8167C129.184 82.7049 128.841 82.6134 128.666 82.6134C128.492 82.6134 128.26 82.7205 128.152 82.8514L127.954 83.0894L128.062 83.3714C128.122 83.5265 128.241 83.6534 128.327 83.6534C128.413 83.6534 128.84 83.8209 129.276 84.0257L130.068 84.3981L130.228 84.8178L130.387 85.2374L130.28 85.6648L130.173 86.0921L129.682 86.3461L129.191 86.6H128.589ZM132.727 86.6H131.92L131.413 86.0934L130.907 85.5867V83.7534V81.92H131.34H131.773V83.6265V85.333L132.09 85.6198L132.407 85.9067H132.771H133.135L133.408 85.6343L133.68 85.3619V83.641V81.92H134.113H134.547V83.7534V85.5867L134.04 86.0934L133.533 86.6H132.727Z" fill={color} />
  </svg>
);

export default Logo;

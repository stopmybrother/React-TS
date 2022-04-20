import React from "react";
import styled from "styled-components";

interface IWithLoadingProps {
    data: any | undefined | null;
};

const LoaderWrapper = styled.div`
  width: 120px;
  height: 120px;
   @keyframes rotate {
    0% {
      transform: scale(1) rotate(360deg);
    }
    50% {
      transform: scale(.8) rotate(-360deg);
    }
  }
`;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  border: 18px solid ${ p => p.theme.colors.veryDarkBlue };
  border-top-color: ${ p => p.theme.colors.mint };
  border-bottom-color: ${ p => p.theme.colors.brightBlue };
  border-radius: 50%;
  animation: rotate 5s linear infinite;
  &.small {
    border-top-color: ${ p => p.theme.colors.white };
    border-bottom-color: ${ p => p.theme.colors.softPink };
    animation-duration: 2.5s;
  }
`;

const isEmpty = ( prop: any ) => {
    return prop === null
    || prop === undefined
    || (prop.hasOwnProperty("length") && prop.length === 0)
    || (prop.constructor === Object && Object.keys(prop).length === 0)
};

export const LoaderHOC = ( loadingProp: string ) =>
    <P extends Record<string, any>>(WrappedComponent: React.ComponentType<P>) => {

        const WithLoading = ( props: P & IWithLoadingProps ) => {
            return isEmpty( props?.[ loadingProp ] ) ?
                <LoaderWrapper>
                    <Loader className = "loader">
                        <Loader className = "loader small"></Loader>
                    </Loader>
                </LoaderWrapper> :
                <WrappedComponent {...props as P} />
        }
        return WithLoading;
}

export default LoaderHOC;


// just was trying to do loading on button-click

// type TLoading = boolean;
//
// const isEmptyAndLoading = ( prop: any, loading: TLoading ) => {
//     return ( prop === null && loading )
//         || ( prop === undefined && loading )
//         || ( (prop.hasOwnProperty("length") && prop.length === 0) && loading )
//         || ( (prop.constructor === Object && Object.keys(prop).length === 0) && loading)
// };
//
// export const LoaderHOCTwo = ( loadingProp: string ) =>
//     <P extends Record<string, any>>(WrappedComponent: React.ComponentType<P>) => {
//
//         const WithLoading = ( props: P & WithLoadingProps ) => {
//             return isEmptyAndLoading( props?.[ loadingProp ], props?.isLoading ) ?
//                 <LoaderWrapper>
//                     <Loader className = "loader">
//                         <Loader className = "loader small"></Loader>
//                     </Loader>
//                 </LoaderWrapper> :
//                 <WrappedComponent {...props as P} />
//         };
//         return WithLoading;
//     };
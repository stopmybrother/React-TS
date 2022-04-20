import React from "react";
import styled from "styled-components";

interface WithLoadingProps {
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
  border: 18px solid #162534;
  border-top-color: #05b28a;
  border-bottom-color: #0dc0e8;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
  &.small {
    border-top-color: #fff;
    border-bottom-color: #ee8f8f;
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

        const WithLoading = ( props: P & WithLoadingProps ) => {
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

// export const LoadingHOC = ( loadingProp: string ) =>
//     <P extends Record<string, any>>(WrappedComponent: React.ComponentType<P>) => {
//
//         class WithLoading extends React.Component<P & WithLoadingProps> {
//             render() {
//                 return isEmpty(this?.props?.[loadingProp]) ? <div className = "loader" /> : <WrappedComponent { ...this.props as P } />;
//             }
//         };
//         return WithLoading;
//     };
//
// export default LoadingHOC;
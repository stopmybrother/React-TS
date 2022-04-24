import React from "react";
import styled from "styled-components";

interface IWithLoadingProps {
    data: any | undefined | null;
}

const LoaderWrapper = styled.div`
  width: 120px;
  height: 120px;
  @keyframes rotate {
    0% {
      transform: scale(1) rotate(360deg);
    }
    50% {
      transform: scale(0.8) rotate(-360deg);
    }
  };
`;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  border: 18px solid ${(p) => p.theme.colors.veryDarkBlue};
  border-top-color: ${(p) => p.theme.colors.mint};
  border-bottom-color: ${(p) => p.theme.colors.brightBlue};
  border-radius: 50%;
  animation: rotate 5s linear infinite;
  &.small {
    border-top-color: ${(p) => p.theme.colors.white};
    border-bottom-color: ${(p) => p.theme.colors.softPink};
    animation-duration: 2.5s;
  }
`;

export const LoaderHOC = (loadingProp: string) => <
    P extends Record<string, any>
    >(
    WrappedComponent: React.ComponentType<P>
) => {
    const WithLoading = (props: P & IWithLoadingProps) => {
        return props?.[loadingProp] ? (
            <LoaderWrapper>
                <Loader className="loader">
                    <Loader className="loader small"></Loader>
                </Loader>
            </LoaderWrapper>
        ) : (
            <WrappedComponent {...(props as P)} />
        );
    };
    return WithLoading;
};

export default LoaderHOC;
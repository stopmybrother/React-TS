import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import styled, { css } from "styled-components";
import { LoaderHOC } from "./LoaderHOC/LoaderHoc";
import { CommonContainer, CommonContainerFlexBox } from "../styled-components/common-components/wrappers-and-containers/CommonContainer";

interface IAppComponentUIProps {
    readonly data: Record<string, any>;
};

const Container = styled(CommonContainerFlexBox)`
  padding-top: 5px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-left: 25px;
  min-height: 150px;
  align-content: center;
  justify-content: space-between;
  column-gap: 20px;
  background-color: ${ p => p.theme.colors.darkBlue };
  border: 1px solid ${ p => p.theme.colors.paleDarkBlue };
  border-radius: 10px;
  box-shadow: 0 0 10px 3px ${ p => p.theme.colors.veryPaleDarkBlue };
`;

const Button = styled.button`
  font-size: 25px;
  color: ${ p => p.theme.colors.brightMint };
  padding: 20px 50px;
  background-color: transparent;
  border: 3px solid ${ p => p.theme.colors.brightMint };
  position: relative;
  transition: all .5s linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border: inherit;
    transition: all 0.5s;
  }

  &::before {
    top: -15px;
    left: -15px;
    border-width: 3px 0 0 3px;
  }
  &::after {
    bottom: -15px;
    right: -15px;
    border-width: 0 3px 3px 0;
  }

  &:hover::before,
  &:hover::after {
    width: calc(100% + 27px);
    height: calc(100% + 27px);
  }

  &:active {
    color: ${ p => p.theme.colors.lightMint };
    border-color: ${ p => p.theme.colors.veryLightMint };
  }
  
  ${ p => p.disabled && css`
    transition: all .2s linear;
    color: #858888;
    border-color: #868888;
  ` }
`;

const P = styled.p`
  padding: 20px 8px;
  max-width: 200px;
  width: 100%;
  min-height: 70px;
  border: 1px solid ${ p => p.theme.colors.purple };
  border-radius: 10px;
  background-color: ${ p => p.theme.colors.paleMint };
  color: ${ p => p.theme.colors.veryDarkPurple };
  text-transform: uppercase;
  text-align: right;
`;

const AppComponentUI = ( props: IAppComponentUIProps ) => {
    return (
            <P>
                { props?.data.data.title }
            </P>
    );
};

const AppComponent = LoaderHOC( "data" )( AppComponentUI );

const GetResponse = () => {
    const [ post, setPost ] = useState( {} );
    // const [ loading, setLoading ] = useState( false ); // wanted to send a request on button-click (don't know how to transfer loading-state in HOC)

    useEffect( () => {
        axios
            .get<AxiosResponse>( "https://jsonplaceholder.typicode.com/posts/1" )
            .then( (data) => {
                setTimeout( () => {
                    // setLoading( false );
                    setPost( data );
                }, 5000);
            })
            .catch( ( error ) => {
                // setLoading( false );
                console.log( error );
            });
    }, []);

    return (
        <>
            <CommonContainer
                marginBottom = { 50 }
                paddingRight = { 16 }
                paddingLeft = { 16 }
            >
                <Container>
                    <Button
                        // disabled = { loading }
                        // onClick = { () => { setLoading( true ) } }
                        // type = "button"
                    >
                        Get data
                    </Button>

                    <AppComponent data = { post } />
                </Container>
            </CommonContainer>
        </>
    );
};

export default GetResponse;
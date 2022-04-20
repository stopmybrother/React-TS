import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import styled, { css } from "styled-components";
import { LoaderHOC } from "./LoadingHOC/LoadingHoc";

interface IAppComponentUIProps {
    readonly data: Record<string, any>;
};

interface IAppComponentUIState {};

const FlexBox = styled.div`
  padding: 5px 15px 5px 25px;
  min-height: 150px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 20px;
  background-color: #30506e;
  border: 1px solid #2a3948;
  border-radius: 10px;
  box-shadow: 0 0 10px 3px #273441;
`;

const Button = styled.button`
  font-size: 25px;
  color: #1fe8b6;
  padding: 20px 50px;
  background-color: transparent;
  border: 3px solid #1fe8b6;
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
    color: #8af3d9;
    border-color: #8df5da;
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
  border: 1px solid #443b67;
  border-radius: 10px;
  background-color: #59bb9b;
  color: #231e3a;
  text-transform: uppercase;
  text-align: right;
`;

const AppComponentUI = ( props: IAppComponentUIState & IAppComponentUIProps ) => {
    return (
            <P>
                { props?.data.data.title }
            </P>
    );
};

const AppComponent = LoaderHOC( "data" )( AppComponentUI );

const GetFuckingData = ( ) => {
    const [ post, setPost ] = useState( {} );
    // const [ loading, setLoading ] = useState( false );  // want to 

    useEffect( () => {

        axios
            .get<AxiosResponse>( "https://jsonplaceholder.typicode.com/posts/1" )
            .then( (data) => {
                setTimeout( () => {
                    // setLoading( false );
                    console.log( data );
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
            <FlexBox>
                <Button
                    // disabled = { loading ? true : false }
                    // onClick = { () => { setLoading( true ) } }
                    // type = "button"
                >
                    Get data
                </Button>

                <AppComponent data = { post } />
            </FlexBox>
        </>
    );
};

export default GetFuckingData;
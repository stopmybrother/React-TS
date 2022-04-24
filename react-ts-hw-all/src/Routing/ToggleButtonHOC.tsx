import React, { useState } from "react";
//
// type TBaseProps = {
//     primeTitle: string,
//     secTitle: string,
// };
//
// type TInjectedProps = {
//     toggleStatus: Boolean,
//     toggle: () => void,
// };
//
// const Button = ( { primeTitle, secTitle, toggleStatus, toggle }: any ) => (
//     <button onClick = { toggle }>
//         { toggleStatus ? primeTitle : secTitle }
//     </button>
// );
//
// const withToggle = <TBaseProps extends TInjectedProps>( PassedComponent: React.ComponentType<TBaseProps> ) => {
//     return ( props: TBaseProps ) => {
//         const [ toggleStatus, toggle ] = useState( false );
//
//         return (
//             <PassedComponent
//                 { ...props as TBaseProps }
//                 toggleStatus = { () => toggle( !toggleStatus ) }
//                 toggle = { toggleStatus }/>
//         )
//     }
// };
//
// const ToggleButton = withToggle( Button );
//
// const HOCApp: React.FC = () => <ToggleButton primeTitle = "Main title" secTitle = "Additional title" />;
//
// export default HOCApp
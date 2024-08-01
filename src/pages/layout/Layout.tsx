// import { templateSliceActions, templateSliceSelectors } from 'store/redux/templateSlice';
// import { BtnGetText, PageWrapper, Wnd } from './styles';
// import { useAppDispatch, useAppSelector } from 'store/hooks';
// import { useEffect } from 'react';
import FormView from '../../components/forms/FormView';
import TableView from '../../components/tables/TableView';
import { PageWrapper, Wnd } from './styles';

function Layout() {

  // const dispatch = useAppDispatch();
  // const { data, isLoading, error } = useAppSelector(
  //   templateSliceSelectors.template
  // );

  // const getData = () => {
  //   if (isLoading) return;
  //   dispatch(templateSliceActions.getTemplate(undefined));
  // };

  // useEffect(() => {
  //   !!error ? alert('error data loading') : null;
  // }, [error]);


  return (
    <PageWrapper>
      <Wnd>
      {/* <BtnGetText isLoading={isLoading} onClick={getData}>
      Get Text
      </BtnGetText>
      {!!data.fact
      ?
      <h1>{data.fact}</h1>
      :
      <h1>{data.text}</h1>
      } */}
      <FormView/>
      <br />
      <TableView/>
       </Wnd>
    </PageWrapper>
  );
}

export default Layout;

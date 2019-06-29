import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import asyncComponent from './components/async.component';

/* --------------------------------------------------------------------------------------------------------------------------  */
                                                    /*  Import des layout  */
/* --------------------------------------------------------------------------------------------------------------------------  */
import Front from './layouts/layout-front/layout-front.component';
import Classic from './layouts/layout-classic/layout-classic.component';
import Eleve from './layouts/layout-eleve/layout-eleve.component';
import editprofComponent from './containers/account/editprof/editprof.component';


/* ------------------------------ TEMPLATE  ----------------------------------------------------------------------------------- */
/*
import Compact from './layouts/layout-compact/layout-compact.component';
import Back   from './layouts/layout-back/layout-back.component';
import Toolbar from './layouts/layout-toolbar/layout-toolbar.component';
import Boxed from './layouts/layout-boxed/layout-boxed.component';
import Funky from './layouts/layout-funky/layout-funky.component';
import Tabbed from './layouts/layout-tabbed/layout-tabbed.component';
import NoLayout from './layouts/layout-none/layout-none.component';
*/

/* --------------------------------------------------------------------------------------------------------------------------  */
                                                    /*  IMPORT DES VUE PERSO  */
/* --------------------------------------------------------------------------------------------------------------------------  */
//  MAIN APP ROUTES
const AsyncLanding= asyncComponent(() => import('./containers/landing/landing.component'));
const AsyncTarifs= asyncComponent(() => import('./containers/tarifs/tarifs.component'));
const AsyncEcole= asyncComponent(() => import('./containers/ecole/ecole.component'));
const AccountProff= asyncComponent(() => import('./containers/account/professeur/account.component'));
const EditProf= asyncComponent(() => import('./containers/account/editprof/editprof.component'));

const ClassesProff= asyncComponent(() => import('./containers/classe/proff/contacts.component'));
const ElevesProff= asyncComponent(() => import('./containers/eleves/eleve/allcontacts.component'));
const AsyncExercice= asyncComponent(() => import('./containers/exercice/exercice.component'));
const MesExercices = asyncComponent(() => import('./containers/exercice/mes-exercices/mes-exercices.component'));
//const AccountProff= asyncComponent(() => import('./containers/account/professeur/account.component'))
const AsyncEleveHome= asyncComponent(() => import('./containers/eleves/home/home-eleve.component'));
const classesEleve = asyncComponent(() => import('./containers/eleves/classes/classes-eleve.component'));

/* --------------------------------------------------------------------------------------------------------------------------  */
                                                    /*  IMPORT DES VUE DU  TEMPLATE  */
/* --------------------------------------------------------------------------------------------------------------------------  */




// DASHBOARD ROUTE
const AsyncAnalyticsDashboard = asyncComponent(() => import('./containers/dashboards/analytics/analytics.component'));
const AsyncEcommerceDashboard = asyncComponent(() => import('./containers/dashboards/ecommerce/ecommerce.component'));
const AsyncCryptoDashboard = asyncComponent(() => import('./containers/dashboards/crypto/crypto.component'));
const AsyncProjectDashboard = asyncComponent(() => import('./containers/dashboards/project/project.component'));
const AsyncTheming = asyncComponent(() => import('./containers/theming/theming.component'));
// APP ROUTES
const AsyncEmailApp = asyncComponent(() => import('./containers/apps/email/email.component'));
const AsyncTodoApp = asyncComponent(() => import('./containers/apps/todo/todo.component'));
const AsyncMapsApp = asyncComponent(() => import('./containers/apps/maps/maps.component'));
const AsyncNotesApp = asyncComponent(() => import('./containers/apps/notes/notes.component'));
const AsyncChatApp = asyncComponent(() => import('./containers/apps/chat/chat.component'));
const AsyncCalendarApp = asyncComponent(() => import('./containers/apps/calendar/calendar.component'));
// EXAMPLE ROUTES
const AsyncAutocompleteExample = asyncComponent(() => import('./containers/elements/autocomplete/autocomplete.component'));
const AsyncSelectionControlsExample = asyncComponent(() => import('./containers/elements/selection-controls/selection-controls.component'));
const AsyncPickerExample = asyncComponent(() => import('./containers/elements/picker/picker.component'));
const AsyncSelectExample = asyncComponent(() => import('./containers/elements/select/select.component'));
const AsyncTextFieldExample = asyncComponent(() => import('./containers/elements/text-field/text-field.component'));
const AsyncAppBarExample = asyncComponent(() => import('./containers/elements/app-bar/app-bar.component'));
const AsyncMenuExample = asyncComponent(() => import('./containers/elements/menu/menu.component'));
const AsyncListExample = asyncComponent(() => import('./containers/elements/list/list.component'));
const AsyncCardExample = asyncComponent(() => import('./containers/elements/card/card.component'));
const AsyncPaperExample = asyncComponent(() => import('./containers/elements/paper/paper.component'));
const AsyncAvatarExample = asyncComponent(() => import('./containers/elements/avatars/avatars.component'));
const AsyncSteppersExample = asyncComponent(() => import('./containers/elements/steppers/steppers.component'));
const AsyncButtonExample = asyncComponent(() => import('./containers/elements/button/button.component'));
const AsyncProgressExample = asyncComponent(() => import('./containers/elements/progress/progress.component'));
// AUTHENTICATION ROUTES
const AsyncLogin = asyncComponent(() => import('./containers/authentication/login/login.component'));
const AsyncRegister = asyncComponent(() => import('./containers/authentication/register/register.component'));
const AsyncRegisterForm = asyncComponent(() => import('./containers/authentication/register/registerForm.component'));
// PAGES ROUTES



/* --------------------------------------------------------------------------------------------------------------------------  */
                                                    /*  Composant route  */
/* --------------------------------------------------------------------------------------------------------------------------  */

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

/* --------------------------------------------------------------------------------------------------------------------------  */
                                                    /*  Composant route protegée */
/* --------------------------------------------------------------------------------------------------------------------------  */
const AppprotectedRoute = ({ roles , logged, roles_accepted, component: Component, redir, layout: Layout, ...rest }) => {
  var token = localStorage.getItem('token');

  if(typeof(token) !== 'undefined' && token !== null){
    logged = true;
  }


  if(!roles_accepted.includes(roles)) {
    //logged = false;
  }

  if(logged){
  return(
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />);
  }

  return <Redirect  to={{
    pathname : '/login',
    search: "?error=access",
  }}/>;
};



const ClassicLayout = props => (
  <Front>{props.children}</Front>
);

const FrontLayout = props => (
  <Front>{props.children}</Front>
);

const CompactLayout = props => (
  <Classic>{props.children}</Classic>
);

const EleveLayout = props => (
  <Eleve>{props.children}</Eleve>
);


export default ({ logged , childProps, layout, roles }) => {

  let activeLayout;

  // EN VRAI CA SERT A RIEN MAIS BON... JE LAISSE LE BOUT DE CODE, ON SAIS JAMAIS. 
  switch (layout.currentLayout) {
  case 'classic':
    activeLayout = ClassicLayout;
    break;
  case 'compact':
    activeLayout = CompactLayout;
    break;
  case 'front':
    activeLayout = FrontLayout;
    break;
  default:
    activeLayout = FrontLayout;
  }

  const role_user  = ['ROLE_USER'];
  const role_eleve = ['ROLE_ELEVE'];

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------  */
                                                    /* ROUTES */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------  */
  return (
    <Switch>
  {/*
              Routes landing. Inscription.
  */}
      <AppRoute path="/" exact component={AsyncLanding} props={childProps} layout={activeLayout}     roles={roles}                            />
      <AppRoute path="/tarifs" exact component={AsyncTarifs} props={childProps} layout={activeLayout}     roles={roles}                            />
      <AppRoute path="/ecole" exact component={AsyncEcole} props={childProps} layout={activeLayout} roles={roles}                             />
      <AppRoute path="/login" exact component={AsyncLogin} props={childProps} layout={activeLayout} roles={roles}                             />
      <AppRoute path="/inscription" exact component={AsyncRegister} props={childProps} layout={activeLayout} roles={roles}                    />
      <AppRoute path={"/inscription/:formulaire"} exact component={AsyncRegisterForm} props={childProps} layout={activeLayout} roles={roles}  />
      <AppRoute path="/eleve" exact component={AsyncRegister} props={childProps} layout={activeLayout} roles={roles}                          />
      <AppRoute path="/exercice" exact component={AsyncExercice} props={childProps} layout={activeLayout} roles={roles}                       />
  {/*
              Routes Proteger.
        --------------------------------------------------------------------------------------------------------------------------------------------------- 
  */} 

  
    <AppprotectedRoute path="/mes-exercices"  logged={logged} exact component={MesExercices} props={childProps} layout={CompactLayout} roles={roles}        roles_accepted={role_user} />
     
      <AppprotectedRoute path="/account"  logged={logged} exact component={AccountProff} props={childProps} layout={CompactLayout} roles={roles}        roles_accepted={role_user} />
      <AppprotectedRoute path="/professeur/compte" logged={logged}  exact component={AccountProff} props={childProps} layout={CompactLayout} roles={roles}  roles_accepted={role_user} />
      <AppprotectedRoute path="/professeur" exact component={AsyncRegister} redir={AsyncLogin} props={childProps} layout={CompactLayout} roles={roles}  roles_accepted={role_user}/>
      <AppprotectedRoute path="/professeur/classes" exact component={ClassesProff} redir={AsyncLogin} props={childProps} layout={CompactLayout} roles={roles} roles_accepted={role_user} />
      <AppprotectedRoute path="/professeur/classes/add" exact component={ClassesProff} redir={AsyncLogin} props={childProps} layout={CompactLayout} roles={roles} roles_accepted={role_user} />
      <AppprotectedRoute path="/apps/contacts" exact component={ElevesProff} redir={AsyncLogin} props={childProps} layout={CompactLayout} roles={roles} roles_accepted={role_user} />
      <AppprotectedRoute path="/account/edit"  logged={logged} exact component={EditProf} props={childProps} layout={CompactLayout} roles={roles}        roles_accepted={role_user} />
      {/* <AppprotectedRoute path="/account/edit" exact component={EditProf} props={childProps} layout={activeLayout}     roles={roles}                   roles_accepted={role_user}         /> */}

      
      <AppprotectedRoute path="/home"  logged={logged} exact component={AsyncEleveHome} props={childProps} layout={EleveLayout} roles={roles}           roles_accepted={role_eleve} />
      <AppprotectedRoute path="/classes"  logged={logged} exact component={classesEleve} props={childProps} layout={EleveLayout} roles={roles}           roles_accepted={role_user} />
   {/*
        --------------------------------------------------------------------------------------------------------------------------------------------    
        --------------------------------------------------------------------------------------------------------------------------------------------
  */}           
      <AppRoute path="/dashboards/analytics" exact component={AsyncAnalyticsDashboard} props={childProps} layout={CompactLayout} />
      <AppRoute path="/dashboards/ecommerce" exact component={AsyncEcommerceDashboard} props={childProps} layout={CompactLayout} />
      <AppRoute path="/dashboards/crypto" exact component={AsyncCryptoDashboard} props={childProps} layout={CompactLayout} />
      <AppRoute path="/dashboards/project" exact component={AsyncProjectDashboard} props={childProps} layout={CompactLayout} />
      <AppRoute path="/theming" exact component={AsyncTheming} props={childProps} layout={CompactLayout} />
      <AppRoute path="/apps/email" exact component={AsyncEmailApp} props={childProps} layout={CompactLayout} />
      <AppRoute path="/apps/todo" exact component={AsyncTodoApp} props={childProps} layout={CompactLayout} />
      <AppRoute path="/apps/maps" exact component={AsyncMapsApp} props={childProps} layout={CompactLayout} />
      <AppRoute path="/apps/notes" exact component={AsyncNotesApp} props={childProps} layout={CompactLayout} />
      <AppRoute path="/apps/chat" exact component={AsyncChatApp} props={childProps} layout={CompactLayout} />
      <AppRoute path="/apps/calendar" exact component={AsyncCalendarApp} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/autocomplete" exact component={AsyncAutocompleteExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/selection-controls" exact component={AsyncSelectionControlsExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/picker" exact component={AsyncPickerExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/selects" exact component={AsyncSelectExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/text-fields" exact component={AsyncTextFieldExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/app-bar" exact component={AsyncAppBarExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/menu" exact component={AsyncMenuExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/list" exact component={AsyncListExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/cards" exact component={AsyncCardExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/paper" exact component={AsyncPaperExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/avatars" exact component={AsyncAvatarExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/steppers" exact component={AsyncSteppersExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/buttons" exact component={AsyncButtonExample} props={childProps} layout={CompactLayout} />
      <AppRoute path="/elements/progress" exact component={AsyncProgressExample} props={childProps} layout={CompactLayout} />
{/*
      <AppRoute path="/register" exact component={AsyncRegister} props={childProps} layout={NoLayout} />
      <AppRoute path="/profile" exact component={AsyncProfile} props={childProps} layout={activeLayout} />
      <AppRoute path="/lock" exact component={AsyncLock} props={childProps} layout={NoLayout} />
      <AppRoute path="/forgot-password" exact component={AsyncForgot} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/404" exact component={AsyncError404} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/500" exact component={AsyncError500} props={childProps} layout={NoLayout} />
      <AppRoute path="/pages/typography" exact component={AsyncTypography} props={childProps} layout={activeLayout} />
      <AppRoute path="/pages/colors" exact component={AsyncColors} props={childProps} layout={activeLayout} />
      <AppRoute component={AsyncNotFound} layout={activeLayout} />
*/}
    </Switch>)
    ;
};


/* --------------------------------------------------------------------------------------------------------------------------  */
                                                    /*  CONSTANTE de LAYOUT Inutilisée. - TEMPLATE */
/* --------------------------------------------------------------------------------------------------------------------------  */
/*
const BackLayout = props => (
  <Back>{props.children}</Back>
);


  case 'back':
      activeLayout = BackLayout;
      break;
  case 'toolbar':
    activeLayout = ToolbarLayout;
    break;
  case 'boxed':
    activeLayout = BoxedLayout;
    break;
  case 'funky':
    activeLayout = FunkyLayout;
    break;
  case 'tabbed':
    activeLayout = TabbedLayout;
    break;

const ToolbarLayout = props => (
  <Toolbar>{props.children}</Toolbar>
);

const BoxedLayout = props => (
  <Boxed>{props.children}</Boxed>
);

const FunkyLayout = props => (
  <Funky>{props.children}</Funky>
);

const TabbedLayout = props => (
  <Tabbed>{props.children}</Tabbed>
);
*/

/*
Acien truc modifier par nicolas, voir constante de template.
  <Classic>{props.children}</Classic>
  <Compact>{props.children}</Compact>
*/
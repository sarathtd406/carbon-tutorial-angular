import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UIShellModule} from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';


// import Notification16 from '@carbon/icons/es/notification/16';
// import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
// import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UIShellModule, RouterTestingModule],
      declarations: [ AppComponent, HeaderComponent ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
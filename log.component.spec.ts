// import { ComponentFixture, TestBed } from '@angular/core/testing';


// describe('LogComponent', () => {
//   let component: LogComponent;
//   let fixture: ComponentFixture<LogComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LogComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LogComponent } from './log.component';





describe('LoginComponent', () => {
    let component:LogComponent;
    let fixture: ComponentFixture<LogComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LogComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

   

    it('Should call the Login method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'logIn'); //method
            el = fixture.debugElement.query(By.css('Login')).nativeElement; //button
            el.click();
            expect(component.logIn).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
        component.loginForm.controls['email'].setValue('');
        component.loginForm.controls['password'].setValue('');
        expect(component.loginForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
        component.loginForm.controls['email'].setValue('kamal@123');
        component.loginForm.controls['password'].setValue('12345');
        expect(component.loginForm.valid).toBeTruthy();
    }));
  


});


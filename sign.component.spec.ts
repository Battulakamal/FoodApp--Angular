// import { ComponentFixture, TestBed } from '@angular/core/testing';


// describe('SignComponent', () => {
//   let component: SignComponent;
//   let fixture: ComponentFixture<SignComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SignComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SignComponent);
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
 import { SignComponent } from './sign.component';




describe('SignupComponent', () => {
    let component:SignComponent;
    let fixture: ComponentFixture<SignComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

   

    it('Should call the Signup method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'signUp'); //method
            el = fixture.debugElement.query(By.css('signUp')).nativeElement; //button
            el.click();
            expect(component.signUp).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
      component.signupForm.controls['name'].setValue('');//form
        component.signupForm.controls['email'].setValue('');
        component.signupForm.controls['mobile'].setValue('');
        component.signupForm.controls['password'].setValue('');
        expect(component.signupForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
      component.signupForm.controls['name'].setValue('kamal');
        component.signupForm.controls['email'].setValue('kamal@123');
        component.signupForm.controls['mobile'].setValue('8019168599');
        component.signupForm.controls['password'].setValue('12345');
        expect(component.signupForm.valid).toBeTruthy();
    }));
  


});
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MASKS, NgBrazilValidators } from "ng-brazil";
import { AppController } from "../core/default/appController";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public appController: AppController
  ) { }

  public MASKS = MASKS;

  private mock = {
    cpf: '322.697.800-43'
  };

  showResults: boolean = false;

  form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
    });
  }

  getFieldError(field: string, error: string): boolean {
    return this.appController.getFieldError(this.form, field, error);
  }

  submit(): void {
    if(this.form.valid) {
      this.showResults = true;
    }
  }
}

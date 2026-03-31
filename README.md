# Week12 Forms Navigation (By: Pritesh Patel)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

# 📘 Angular Forms & Navigation Demo – Student Guide

## 📌 Project Overview

This project demonstrates core Angular concepts using a simple multi-page application styled with Tailwind CSS. It includes:

* 🧭 Angular Routing (Navigation)
* 📝 Template Driven Forms
* ⚙️ Reactive Forms
* 🔄 Passing Data Between Pages (Query Params & Router State)
* ❌ 404 Page (Page Not Found)
* 🎨 Modern UI with Tailwind CSS

This project is designed to help students understand **real-world Angular application structure and workflows**.

---

## 🗂️ Application Pages

| Page         | Description                    |
| ------------ | ------------------------------ |
| Home         | Overview of Angular concepts   |
| About        | Information about the app/team |
| Contact      | Template-driven form example   |
| Confirmation | Displays submitted form data   |
| 404          | Handles invalid routes         |

---

## 🧭 Angular Navigation (Routing)

### 📌 Key Concepts

* Define routes using `Routes`
* Use `<router-outlet>` to render components
* Navigate using `routerLink` or `Router.navigate()`

### ✅ Example Route Configuration

```ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '**', component: NotFoundComponent }
];
```

---

## 📝 Template Driven Forms

### 📌 Features

* Uses `ngModel` for two-way binding
* Uses `ngForm` for form reference
* Validation handled in HTML

### ✅ Example

```html
<form #form="ngForm" (ngSubmit)="submitForm(form)">
  <input name="name" [(ngModel)]="user.name" required />
</form>
```

### ✔ Best For

* Small forms
* Simple validation

---

## ⚙️ Reactive Forms

### 📌 Features

* Uses `FormGroup`, `FormControl`
* Validation handled in TypeScript
* More scalable and testable

### ✅ Example

```ts
this.form = this.fb.group({
  name: ['', Validators.required]
});
```

```html
<form [formGroup]="form">
  <input formControlName="name" />
</form>
```

### ✔ Best For

* Large/complex forms
* Dynamic forms

---

## 🔄 Passing Data Between Pages

### 1️⃣ Query Parameters

✔ Visible in URL
✔ Good for sharing data

```ts
this.router.navigate(['/display'], {
  queryParams: { name: 'John' }
});
```

Access:

```ts
this.route.queryParams.subscribe(params => {
  console.log(params['name']);
});
```

---

### 2️⃣ Router State

✔ Not visible in URL
✔ Good for temporary data

```ts
this.router.navigate(['/confirmation'], {
  state: { data: this.user }
});
```

Access:

```ts
this.data = history.state.data;
```

⚠️ Note: Data is lost on page refresh.

---

## ❌ 404 Page (Wildcard Route)

Handles invalid URLs:

```ts
{ path: '**', component: NotFoundComponent }
```

---

## 🎨 Tailwind CSS Integration

### 📌 Benefits

* Utility-first CSS
* Fast UI development
* Responsive design

### Example

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind
</div>
```

---

## ⚠️ Common Errors & Fixes

### ❌ Can't bind to 'ngModel'

✔ Import `FormsModule`

### ❌ Can't bind to 'formGroup'

✔ Import `ReactiveFormsModule`

### ❌ routerLink not working

✔ Import `RouterModule` or `provideRouter()`

---

## 🚀 How to Run the Project

```bash
npm install
ng serve
```

Open browser:

```
http://localhost:4200
```

---

## 🎯 Learning Outcomes

After completing this project, students will be able to:

* ✅ Create Angular components and routes
* ✅ Build Template Driven & Reactive Forms
* ✅ Implement navigation between pages
* ✅ Pass data using query params and router state
* ✅ Handle invalid routes with 404 page
* ✅ Use Tailwind CSS for modern UI

---

## 🔥 Bonus Practice Tasks

1. Add validation styles (red/green borders)
2. Create a Login page with Reactive Forms
3. Add a navigation guard (AuthGuard)
4. Store form data using a service
5. Add a backend API (Node.js + MongoDB)

---

## 👨‍💻 Author Notes

This project is structured for **hands-on learning and interview preparation**.
Focus on understanding *why* each approach is used (Template vs Reactive, Params vs State).

---

## 📚 Happy Coding

Keep practicing and building real-world Angular apps 🚀

'use client';

import { cn } from '@/lib/utils';
import * as Form from '@radix-ui/react-form';
import React from 'react';

/* -------------------------------------------------------------------------------------------------
 * FormRoot
 * -----------------------------------------------------------------------------------------------*/

type FormRootProps = Form.FormProps & React.RefAttributes<HTMLFormElement>;

export const FormRoot: React.ForwardRefExoticComponent<FormRootProps> =
  React.forwardRef<HTMLFormElement, FormRootProps>((props, ref) => {
    const { className, ...other } = props;

    return <Form.Root {...other} ref={ref} className={cn('', className)} />;
  });
FormRoot.displayName = 'FormRoot';

/* -------------------------------------------------------------------------------------------------
 * FormField
 * -----------------------------------------------------------------------------------------------*/

type FormFieldProps = Form.FormFieldProps & React.RefAttributes<HTMLDivElement>;

export const FormField: React.ForwardRefExoticComponent<FormFieldProps> =
  React.forwardRef<HTMLDivElement, FormFieldProps>((props, ref) => {
    const { className, ...other } = props;

    return <Form.Field {...other} ref={ref} className={cn('', className)} />;
  });

FormField.displayName = 'FormField';

/* -------------------------------------------------------------------------------------------------
 * FormLabel
 * -----------------------------------------------------------------------------------------------*/

type FormLabelProps = Form.FormLabelProps &
  React.RefAttributes<HTMLLabelElement>;

export const FormLabel: React.ForwardRefExoticComponent<FormLabelProps> =
  React.forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
    const { className, ...other } = props;

    return (
      <Form.Label
        {...other}
        ref={ref}
        className={cn(
          'mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
      />
    );
  });

FormLabel.displayName = 'FormLabel';

/* -------------------------------------------------------------------------------------------------
 * FormInput
 * -----------------------------------------------------------------------------------------------*/

type FormInputProps = Form.FormControlProps &
  React.RefAttributes<HTMLInputElement>;

export const FormInput: React.ForwardRefExoticComponent<FormInputProps> =
  React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
    const { className, ...other } = props;

    return (
      <Form.Control asChild>
        <input
          {...other}
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
        />
      </Form.Control>
    );
  });
FormInput.displayName = 'FormInput';

/* -------------------------------------------------------------------------------------------------
 * FormTextarea
 * -----------------------------------------------------------------------------------------------*/

type FormTextareaProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  React.RefAttributes<HTMLTextAreaElement>;

export const FormTextarea: React.ForwardRefExoticComponent<FormTextareaProps> =
  React.forwardRef<HTMLTextAreaElement, FormTextareaProps>((props, ref) => {
    const { className, ref: oldRef, ...other } = props;

    return (
      <Form.Control asChild>
        <textarea
          {...other}
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
        />
      </Form.Control>
    );
  });
FormTextarea.displayName = 'FormTextarea';

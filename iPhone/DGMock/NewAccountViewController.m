//
//  NewAccountViewController.m
//  DGMock
//
//  Created by Jack Arendt on 11/14/13.
//  Copyright (c) 2013 Jack Arendt. All rights reserved.
//

#import "NewAccountViewController.h"

@interface NewAccountViewController (){
    NSString *_fieldError;
}

@end

@implementation NewAccountViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.passwordTextField.secureTextEntry = YES;
    self.confirmPasswordTextField.secureTextEntry = YES;
    self.navigationItem.leftBarButtonItem.tintColor = [UIColor redColor];
    [self.nameTextField becomeFirstResponder];
	// Do any additional setup after loading the view.
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)createAccount:(id)sender {
    if(![self checkFields])
    {
        UIAlertView *alertDialog;
        alertDialog = [[UIAlertView alloc] initWithTitle:@"Error" message:_fieldError delegate:Nil cancelButtonTitle:@"Dismiss" otherButtonTitles: nil];
        [alertDialog show];
    }
    
    else
        [self dismissViewControllerAnimated:YES completion:Nil];
}

- (IBAction)cancelCreate:(id)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}

-(BOOL)checkFields{
    BOOL check = TRUE;
    BOOL email = FALSE;
    if(self.nameTextField.text.length == 0 || self.emailTextField.text.length == 0 || self.confirmEmailTextField.text.length == 0  || self.passwordTextField.text.length == 0 || self.confirmPasswordTextField.text.length == 0){
        _fieldError = @"Please Fill Out All Required Fields";
        check = FALSE;

    }
    if(![self.emailTextField.text isEqualToString:self.confirmEmailTextField.text]){
        _fieldError = @"Emails Do Not Match";
        self.confirmEmailTextField.text = @"";
        check = FALSE;
        email = TRUE;
    }
    
    if(![self.passwordTextField.text isEqualToString:self.confirmPasswordTextField.text]){
        if(email == TRUE)
            _fieldError = @"Email and Passwords Do Not Match";
        else
            _fieldError = @"Passwords Do Not Match";
        
        self.confirmPasswordTextField.text = @"";
        check = FALSE;
    }
    return check;
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField {
    if(textField == self.nameTextField){
        [textField resignFirstResponder];
        [self.emailTextField becomeFirstResponder];
    }
    
    if(textField == self.emailTextField){
        [textField resignFirstResponder];
        [self.confirmEmailTextField becomeFirstResponder];
    }
    
    if(textField == self.confirmEmailTextField){
        [textField resignFirstResponder];
        [self.passwordTextField becomeFirstResponder];
    }
    
    if(textField == self.passwordTextField){
        [textField resignFirstResponder];
        [self.confirmPasswordTextField becomeFirstResponder];
    }
    
    if(textField == self.confirmPasswordTextField){
        [self createAccount:self];
    }
    
    return YES;
}

@end

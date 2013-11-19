//
//  LoginViewController.m
//  DGMock
//
//  Created by Jack Arendt on 11/14/13.
//  Copyright (c) 2013 Jack Arendt. All rights reserved.
//

#import "LoginViewController.h"

@interface LoginViewController ()

@end

@implementation LoginViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (NSUInteger)supportedInterfaceOrientations {
    return UIInterfaceOrientationMaskPortrait;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.passwordTextField.secureTextEntry = YES;
    
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)login:(id)sender {
    if(self.usernameTextField.text.length != 0 && self.passwordTextField.text.length != 0)
        [self performSegueWithIdentifier:@"toMainScreen" sender:self];
}

- (IBAction)hideKeyboard:(id)sender {
    [self.usernameTextField resignFirstResponder];
    [self.passwordTextField resignFirstResponder];
}

- (IBAction)newAccount:(id)sender {
    [self performSegueWithIdentifier:@"toNewAccount" sender:self];
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField {
    if(textField == self.usernameTextField){
        [textField resignFirstResponder];
        [self.passwordTextField becomeFirstResponder];
    }
    if(textField == self.passwordTextField)
        [self login:self];
        
        return YES;
}
@end

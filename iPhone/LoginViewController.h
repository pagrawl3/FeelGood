//
//  LoginViewController.h
//  DGMock
//
//  Created by Jack Arendt on 11/14/13.
//  Copyright (c) 2013 Jack Arendt. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface LoginViewController : UIViewController <UITextFieldDelegate>
@property (weak, nonatomic) IBOutlet UITextField *usernameTextField;
@property (weak, nonatomic) IBOutlet UITextField *passwordTextField;
- (IBAction)login:(id)sender;
- (IBAction)hideKeyboard:(id)sender;
- (IBAction)newAccount:(id)sender;

@end

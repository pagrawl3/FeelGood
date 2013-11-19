//
//  HomeViewController.m
//  DGMock
//
//  Created by Jack Arendt on 11/14/13.
//  Copyright (c) 2013 Jack Arendt. All rights reserved.
//

#import "HomeViewController.h"

@interface HomeViewController ()

@end

@implementation HomeViewController

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
    self.characterCountLabel.text = @"250";
    // Do any additional setup after loading the view.
}

-(void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    //[self.entryTextField becomeFirstResponder];

}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)submit:(id)sender {
}

- (IBAction)toSettings:(id)sender {
}

-(void)textViewDidChange:(UITextView *)textView
{
    int length = self.entryTextField.text.length;
    self.characterCountLabel.text = [NSString stringWithFormat:@"%i", 250-length];
    if(length > 100)
        self.characterCountLabel.textColor = [UIColor orangeColor];
    if(length > 120)
        self.characterCountLabel.textColor = [UIColor redColor];
    if(length < 120 && length > 100)
        self.characterCountLabel.textColor = [UIColor orangeColor];
    if(length < 100)
        self.characterCountLabel.textColor = [UIColor blackColor];
    
}
- (IBAction)toCalendar:(id)sender {
    [self performSegueWithIdentifier:@"toCalendar" sender:self];
}
@end

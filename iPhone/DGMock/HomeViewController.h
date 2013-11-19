//
//  HomeViewController.h
//  DGMock
//
//  Created by Jack Arendt on 11/14/13.
//  Copyright (c) 2013 Jack Arendt. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface HomeViewController : UIViewController
@property (weak, nonatomic) IBOutlet UITextView *entryTextField;
- (IBAction)submit:(id)sender;
- (IBAction)toSettings:(id)sender;
@property (weak, nonatomic) IBOutlet UILabel *characterCountLabel;
- (IBAction)toCalendar:(id)sender;

@end

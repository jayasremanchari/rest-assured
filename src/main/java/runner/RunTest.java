package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(features="Features",glue={"stepDefinitions"},tags={"@GetTest"},
				plugin={"pretty","html:target/cucumber-reports"})		
public class RunTest {

}
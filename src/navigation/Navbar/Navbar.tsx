import React from "react";

import { Star, Search, Frown } from "react-feather";
import { useLocation } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { kathyLeavingRoute, searchMoviesRoute, upcomingMoviesRoute } from "../routes";
import { FlexGrid, Paragraph, NavLinkWithoutDecoration } from "~/components/atoms";
import ThemeSwitch from "~/components/ThemeSwitch";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 0 10px;
  height: 60px;
  display: flex;
  ${({ theme }) => `box-shadow: 0 0px 4px 1px ${theme.shadowColor};`}
  transition: 0.2s all linear 0.05s;
  ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  z-index: 4;
`;

const Navbar = (): JSX.Element => {
  const { pathname } = useLocation();
  const theme = useTheme();

  const getActiveColor = (active: boolean) =>
    active ? theme.primaryTextColor : theme.secondaryTextColor;

  const getActiveParagraphProps = (active: boolean) => ({
    color: getActiveColor(active),
    useTextShadow: active
  });

  const getIsActiveRoute = (currentRoute: string): boolean => currentRoute === pathname;

  return (
    <NavbarContainer {...setTestId(locators.navbar)}>
      <FlexGrid flex="1" justifyContent="flex-start" gap="10px" alignItems="center">
        <NavLinkWithoutDecoration
          to={upcomingMoviesRoute}
          {...setTestId(locators.navbarUpcomingMovies)}>
          <FlexGrid flexDirection="column" alignItems="center" justifyContent="center">
            <Star color={getActiveColor(getIsActiveRoute(upcomingMoviesRoute))} />
            <Paragraph
              {...getActiveParagraphProps(getIsActiveRoute(upcomingMoviesRoute))}
              transition="color 0.3s ease-in-out">
              Upcoming movies
            </Paragraph>
          </FlexGrid>
        </NavLinkWithoutDecoration>
        <NavLinkWithoutDecoration
          to={searchMoviesRoute}
          {...setTestId(locators.navbarSearchMovies)}>
          <FlexGrid flexDirection="column" alignItems="center" justifyContent="center">
            <Search color={getActiveColor(getIsActiveRoute(searchMoviesRoute))} />
            <Paragraph
              {...getActiveParagraphProps(getIsActiveRoute(searchMoviesRoute))}
              transition="color 0.3s ease-in-out">
              Search Movies
            </Paragraph>
          </FlexGrid>
        </NavLinkWithoutDecoration>
        <NavLinkWithoutDecoration to={kathyLeavingRoute}>
          <FlexGrid flexDirection="column" alignItems="center" justifyContent="center">
            <Frown color={getActiveColor(getIsActiveRoute(kathyLeavingRoute))} />
            <Paragraph
              {...getActiveParagraphProps(getIsActiveRoute(kathyLeavingRoute))}
              transition="color 0.3s ease-in-out">
              Kathy leaving
            </Paragraph>
          </FlexGrid>
        </NavLinkWithoutDecoration>
      </FlexGrid>
      <FlexGrid flexDirection="column" justifyContent="center">
        <ThemeSwitch />
      </FlexGrid>
    </NavbarContainer>
  );
};

export default Navbar;

import React from 'react';
import { Card, Page, Layout, TextContainer, Image, Stack, Link, Heading } from "@shopify/polaris";
import { AddColor } from './AddColor';

export function Dashboard() {
  const pageID = "dashboard";
  const pageTitle = "Dashboard";
  const pageDescription = "View the overall stats of the dashboard, popular paint colors, brand bases.";
  

  return (
    <Page fullWidth>
      <AddColor />
    </Page>
  );
}
